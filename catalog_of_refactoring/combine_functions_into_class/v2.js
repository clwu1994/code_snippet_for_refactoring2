const reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017
};

// client 2
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const texableCharge = Math.max(0, base - taxThreshold(aReading.year));