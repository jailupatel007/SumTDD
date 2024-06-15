function addCalculator(input) {
  if (input === '') {
    return 0;
  }

  let delimiter = /[\n,]/;
  let numbersString = input;

  if (input.startsWith('//')) {
    const parts = input.split('\n');
    const customDelimiter = parts[0].substring(2);
    delimiter = new RegExp(
      customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    );
    numbersString = parts[1];
  }

  const numbers = numbersString.split(delimiter).map(num => parseInt(num, 10));
  const negativeNumbers = numbers.filter(num => num < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(',')}`,
    );
  }

  return numbers.reduce((sum, num) => sum + num, 0);
}

module.exports = addCalculator;
