function getSmallestNumber(arr) {
  const smallest = arr.reduce((acc, value) => {
    if (value < acc) {
      return value;
    } else {
      return acc;
    }
  });
  return smallest;
}

let numbers = [12, 10, 5, 20, 56, 100];

console.log(getSmallestNumber(numbers));

function getLeastFrequent(arr) {
  const frequencyMap = new Map();

  arr.forEach((element) => {
    if (!frequencyMap.get(element)) {
      frequencyMap.set(element, 1);
    } else {
      frequencyMap.set(element, frequencyMap.get(element) + 1);
    }
  });

  let leastFrequency = Infinity;
  let leastFrequencyElement;

  frequencyMap.forEach((frequency, element) => {
    if (frequency < leastFrequency) {
      leastFrequency = frequency;
      leastFrequencyElement = element;
    }
  });

  return leastFrequencyElement;
}

let arr2 = [3, 5, "g", 5, "d", 3, "d", 3];
console.log(getLeastFrequent(arr2));
