//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const oneGigaSecond = 1 * Math.pow(10, 12);
export const gigasecond = (date) => {
  // puissance 12 et non puissance 9 parce que Date prend en compte les millisecond
  return new Date(date.getTime() + oneGigaSecond)
};