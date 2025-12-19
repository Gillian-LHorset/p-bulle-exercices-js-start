//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  switch (true) {
    case /\?$/.test(message.trim()) && !/[A-Z]{3}\?$/.test(message.trim()):
      return "Sure."
    case !/[a-z]/.test(message) && /[A-Z]/.test(message) && !/\?$/.test(message.trim()):
      return "Whoa, chill out!"
    case /[A-Z]\!$/g.test(message) || /[A-Z]\?$/g.test(message):
      return "Calm down, I know what I'm doing!"
    case /^[\s]/.test(message) && /[\s]$/.test(message) || message === "":
      return "Fine. Be that way!"
    default:
      return "Whatever."
  }

};
