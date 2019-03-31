// 范例：无局部变量
function printOwing(invoice) {
  printBanner();
  recordDueDate(invoice);
  printDetails(invoice);
  
  function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
      result += o.amount;
    }
    return result;
  }

  function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
  }

  function printDetails(invoice) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${calculateOutstanding(invoice)}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }

  function printBanner() {
    console.log("***********************");
    console.log("******Customer Owes******");
    console.log("***********************");
  }
} 

