const invoices = require("../db/invoices.json");
const plays = require("../db/plays.json");

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format;

  for (let perf of invoice.performances) {
    let thisAmount = amountFor(perf);
    // 添加观众量积分
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 每十位喜剧参加者加上额外的积分
    if ("comedy" === playFor(perf).type) volumeCredits += Math.floor(perf.audience / 5);
    // 订单打印信息
    result += ` ${playFor(perf).name}: ${format(thisAmount / 100)} (${perf.audience} seats)\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;

  function playFor(perf) {
    return plays[perf.playID];
  }

  function amountFor(perf) {
    let thisAmount = 0;
    switch (playFor(perf).type) {
      case "tragedy":
        thisAmount = 40000;
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy":
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`unknow type: ${playFor(perf).type}`);
    }
    return thisAmount;
  }
}

for (let invoice of invoices) console.log(statement(invoice, plays));