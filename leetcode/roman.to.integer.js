/**
 * @param {number} num
 * @return {string}
 */

  // 1 -> I
  // 5 -> V
  // 10 -> X
  // 50 -> L
  // 100 -> C
  // 500 -> D
  // 1000 -> M

const intToRoman = function (num) {
    // 17 -> XVII
    // 17 = 10 + 7
    // 10 = X, 7 = VII [ 5 + 2 ]
    // X, V, + 2 [ 1 + 1 ]
    // V, X, V, I, I

    // 34 -> XXXIV
    // 34 = 10 + 10 + 10 + 4
    // 10 + 10 + 10 + [ 4 = [ 5 - 1 ]]
    // 10 + 10 + 10 + [ 5 - 1 ]
    // X X X [I V]

    // 78
    // 50 + 10 + 10 + 5 + 1 + 1 + 1
    // L X X V I I I

    // 89
    // 50 + 10 + 10 + 10 + [10 - 1]
    // L X X X [IX]
    // L X X X I X

    const pairs = {
      1000: 'M',
      500: 'D',
      100: 'C',
      50: 'L',
      10: 'X',
      5: 'V',
      1: 'I',
    };
    // 78
    // is 78 > 1000 ? false
    // is 78 > 500 ? false
    // is 78 > 100 ? false
    // is 78 > 50 ? true
    // 78 / 50 = 1 rem 28 => 1(50) => L
    // now take 28
    // is 28 > 10 ? true
    // 28 / 10 = 2 rem 8 => 2(10) => XX
    // now take 8
    // is 8 > 5 ? true
    // 8 / 5 = 1 rem 3 => 1 (5) => V
    // now take 3
    // is 3 > 1 ? true
    // 3 / 1 = 3 rem 0 => 3(1) => III
    // L XX V III

    const romans = Object.keys(pairs);
    let resultString = '';
    let starterNum = num;
    for (const romanDigit in romans) {
      if (starterNum < romanDigit) {
        continue;
      }
      const dividend = Math.ceil(starterNum / romanDigit);
      const remainder = starterNum % romanDigit;
      if (dividend <= 3) {
        for (i = 0; i < dividend; i++) { // more changes pending
          resultString += pairs[romanDigit];
        }
      } else {
        resultString += ``;
      }
    }

  };
