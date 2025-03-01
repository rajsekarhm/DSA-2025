/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let count = 0;
    let repeated = word;
    while (sequence.includes(repeated)) {
      count++;
      console.log(repeated)
      repeated += word;
    }
    return count;
  };
console.log(
    maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba","aaaba"))