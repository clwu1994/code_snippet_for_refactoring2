const reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017
};

// client 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

