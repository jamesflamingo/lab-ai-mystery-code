// Bonus challenge: clean up a weird one-liner.
// This keeps only the even numbers, then squares them.
function getSquaredEvenNumbers(values) {
  return values
    .filter((value) => value !== 0 && value % 2 === 0)
    .map((value) => value * value);
}

module.exports = { getSquaredEvenNumbers };
