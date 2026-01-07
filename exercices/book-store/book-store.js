//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  let finalPrice = 0

  let priceBookArray = 0
  let priceDuplicateArray = 0


  let bookArray = []
  let duplicateArray = []

  for (let book of books) {
    if (!bookArray.includes(book)) {
      bookArray.push(book)
    } else {
      duplicateArray.push(book)
    }
  }

  let newArray = []
  let newArray2 = []

  let testPrice = 0
  let testPrice2 = 0

  for (let book of books) {
    let i = 0
    let y = 0


    if (!newArray.includes(book) || !newArray2.includes(book) && i % 2 === 0) {
      newArray.push(book)
    } else if (!newArray.includes(book) || !newArray2.includes(book) && i % 2 === 1) {
      newArray2.push(book)
    } else {
      if (y % 2 === 0) {
        newArray.push(book)
      } else {
        newArray2.push(book)
      }
      y++
    }
    i++
  }


  priceBookArray = calculBooksPrice(bookArray)
  priceDuplicateArray = calculBooksPrice(duplicateArray)

  priceBookArray = priceCalculator(bookArray, priceBookArray)
  priceDuplicateArray = priceCalculator(duplicateArray, priceDuplicateArray)


  
  testPrice = calculBooksPrice(newArray)
  testPrice2 = calculBooksPrice(newArray2)

  testPrice = priceCalculator(newArray, testPrice)
  testPrice2 = priceCalculator(newArray2, testPrice2)

  if (priceBookArray + priceDuplicateArray < testPrice + testPrice2 || !(newArray.length + newArray2.length === 8)) {
    finalPrice = priceBookArray + priceDuplicateArray
  } else {
    finalPrice = testPrice + testPrice2
  }
  return finalPrice
};

function calculBooksPrice(books) {
  let total = 0;
  for (let book in books) {
    total += 800
  }
  return total
}

function priceCalculator(array, price) {
  if (array.length === 2) {
    price = price / 100 * 95
  } else if (array.length === 3) {
    price = price / 100 * 90
  } else if (array.length === 4) {
    price = price / 100 * 80    
  } else if (array.length === 5) {
    price = price / 100 * 75    
  }

  return price
}