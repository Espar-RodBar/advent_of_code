// calibration value
/*
Part 1:
On each line, the calibration value can be found by combining the first digit and 
the last digit (in that order) to form a single two-digit number.

For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines are 12, 38, 15, and 77.
Adding these together produces 142.

Part 2:
It looks like some of the digits are actually spelled out with letters:
 one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".
*/
// kltzvrjbdseveneight63onepqztpqkhrceight
function convertNumStrToNum(word) {
  const convertTable = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
  console.log(word)
  let wordConverted = word
  for (const key of Object.keys(convertTable)) {
    let index = wordConverted.indexOf(key)
    while (index !== -1) {
      wordConverted =
        wordConverted.slice(0, index + 1) +
        convertTable[key] +
        wordConverted.slice(index + 1)
      index = wordConverted.indexOf(key)
    }
    console.log(wordConverted)
  }

  return wordConverted
}

function findCalibrationNumber(input) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const inputConverted = convertNumStrToNum(input)
  const numbers = inputConverted
    .split('')
    .filter((digit) => !letters.includes(digit))

  console.log(`${numbers[0]}${numbers[numbers.length - 1]}`)
  return `${numbers[0]}${numbers[numbers.length - 1]}`
}

function sumCalibration(document) {
  const inputAr = document.split('\n')
  const calibrationValues = inputAr.map(findCalibrationNumber)
  const sum = calibrationValues.reduce(
    (total, val) => (total += Number(val)),
    0
  )

  console.log(sum)
}

const solution = sumCalibration
export { solution }
