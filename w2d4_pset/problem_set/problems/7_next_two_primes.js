/***********************************************************************
Write a function `nextTwoPrimes(num)` that takes in a number `num` and
returns the next two prime numbers greater than `num`.

Examples:
nextTwoPrimes(2); // => [ 3, 5 ]
nextTwoPrimes(3); // => [ 5, 7 ]
nextTwoPrimes(7); // => [ 11, 13 ]
nextTwoPrimes(8); // => [ 11, 13 ]
nextTwoPrimes(20); // => [ 23, 29 ]
nextTwoPrimes(97); // => [ 101, 103 ]
***********************************************************************/

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0 ) {
      return false;
    }
  }

  return true;
}

function nextTwoPrimes(num) {
  let arrPrimes = [];

  for (let i = num + 1; arrPrimes.length < 2; i++) {
    if (isPrime(i)) {
      arrPrimes.push(i);
    }
  }

  return arrPrimes;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = nextTwoPrimes;
