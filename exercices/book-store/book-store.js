//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const BOOK_PRICE = 800
  const DISCOUNTS = {
    1: 1.00,
    2: 0.95,
    3: 0.90,
    4: 0.80,
    5: 0.75
  }

  const counts = Array(5).fill(0)
  books.forEach(book => counts[book - 1]++)

  let groups = []
  
  while (Math.max(...counts) > 0) {
    let groupSize = 0
    for (let i = 0; i < 5; i++) {
      if (counts[i] > 0) {
        groupSize++
        counts[i]--
      }
    }
    groups.push(groupSize)
  }
  
  let indexOf5 = groups.indexOf(5)
  let indexOf3 = groups.indexOf(3)

  while (indexOf5 !== -1 && indexOf3 !== -1) {
    groups[indexOf5] = 4
    groups[indexOf3] = 4
    
    indexOf5 = groups.indexOf(5)
    indexOf3 = groups.indexOf(3)
  }

  let total = 0
  groups.forEach(size => {
    total += size * BOOK_PRICE * DISCOUNTS[size]
  })

  return total
}