// Linear Search function

// Add all the operations together to get a running time of (3 * n) + 4, better expressed as 3n + 4

// If we call this function with an array of 10 items and a number that isn't in the array, how many total operations will get executed?
// search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1);
// Here n = 10 so it will be a total of (3 * 10) + 4 operations, or 34 operations.
// So in this case, it's going to have a running time of 34.

// How many operations would it be for an array size of 1,000 items?
// It's going to be 3,004

function search(array, item) {
  let index = null;              // 1

  for (
    let i = 0;                   // 1
    i < array.length;            // n + 1
    i++                          // n
  ) {
    if (item === array[i]) {     // n
      index = i;                 // only happens once if found, so not counting for worst case
      break;
    }
  }

  return index;                  // 1
}


// Binary Search function

// Add all the operations together to get a running time of 3 + (9 * log n), better expressed as 9log(n) + 3

// If we call our binary search function with an array of 10 sorted items and a target number that is not in the array, how many total operations will get executed?
// search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1);
// It will be a total of 3 + (9 * log 10) operations, which is 3 + (9 * 4) or 39 operations.
// So in this case, it's going to have a running time of 39.

// How many operations would it be for an array size of 1,000 items?
// It's going to be 93

// If our array contained 1,000,000,000 items, the running time of binary search would be only 273.

function search(array, item) {
  let min = 0;                                      // 1
  let max = array.length - 1;                       // 1

  while (true) {                                    // lg n
    const endIndex = min + max;                     // lg n
    const middleDecimal = endIndex / 2.0;             // lg n
    const middleIndex = Math.floor(middleDecimal);  // lg n

    const currentItem = array[middleIndex];         // lg n

    if (currentItem === item) {                     // lg n
      return middleIndex;
    } else if (currentItem < item) {                // lg n
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;                        // lg n
    }

    if (min > max) {                                // lg n
      return null;                                  // 1
    }
  }
}
