//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, age) => {
  const planetArray = ["earth", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune"]
  const orbitalPeriodArray = [1.0 , 0.2408467, 0.61519726, 1.8808158, 11.862615, 29.447498, 84.016846, 164.79132]
  if (planet == "Sun" || planet == "pluton") {
    throw new Error ('not a planet')
  } else {
    return (Number)((age / (orbitalPeriodArray[planetArray.indexOf(planet)] * 60 * 60 * 24 * 365.25)).toFixed(2))
  }
};
