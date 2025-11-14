// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return kind == 'car' || kind == "truck"
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  // optimisation en mettant le texte en variable
  let bestChoice = " is clearly the better choice."
  if (option1 < option2) {
    return option1 + bestChoice
  } else {
    return option2 + bestChoice
  }
  
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  const NEWVEHICULAGE = 3;
  const OLDVEHICULAGE = 10;
  let discount;
  if (age < NEWVEHICULAGE) {
    // nouveau véhicule
    discount = 0.8
  } else if (age > OLDVEHICULAGE) {
    // vieux véhicule
    discount = 0.5
  } else {
    // entre deux ages véhicule
    discount = 0.7
  }
  return originalPrice * discount
}
