// Quadratic

// Add all the operations together to get a running time of 3 + 5n + 4n^2

function arrayContainsSum(array, sum) {

  for (
    let i = 0;                              // 1
    i < array.length;                       // n + 1
    i++                                     // n
    ) {
    const element1 = array[i];              // n

    for (
      let ii = 0;                           // n
      ii < array.length;                    //n + n^2
      ii++                                  // n^2
      ) {

      const element2 = array[ii];           // n^2

      if (element1 + element2 === sum) {    // n^2
        return true;
      }
    }
  }
  return false;                             // 1
}

// Make the algorithm more efficient: Get rid of the nested for loop

// Add all the operations together to get a running time of 4 + 7n.

function arrayContainsSum(array, sum) {
  let i = 0; // 1
  let ii = array.length-1;                     // 1

  while (i <= ii) {                            // n + 1

    const element1 = array[i];                 // n
    const element2 = array[ii];                // n
    const currentSum = element1 + element2;    // n

    if (currentSum === sum) {                  // n
      return true;
    } else if(currentSum > sum) {              // n
      ii--;                                    // n
    } else {
      i++;
    }
  }
  return false;                                // 1
}