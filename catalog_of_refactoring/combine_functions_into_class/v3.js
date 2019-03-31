const reading = {
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017
};
function acquireReading() {
  return reading;
}
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
// client 3
const aReading = acquireReading();
const baseChargeAmount = calculateBaseCharge(aReading);
function calculateBaseCharge(aReading) {
  return Math.max(0, base - taxThreshold(aReading.year));
}