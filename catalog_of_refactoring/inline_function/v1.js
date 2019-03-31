function getRating(driver) {
  return moreThanFiveLateDeliveries(diver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(diver) {
  return diver.numberOfLateDeliveries > 5;
}