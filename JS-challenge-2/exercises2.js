const removeDuplicates = (arr) => {
  const frequencyMap = new Map();

  arr.forEach((element) => {
    if (!frequencyMap.get(element)) {
      frequencyMap.set(element, 1);
    } else {
      frequencyMap.set(element, frequencyMap.get(element) + 1);
    }
  });

  let singleElements = [];

  frequencyMap.forEach((frequency, element) => {
    if (frequency === 1) {
      singleElements.push(element);
    }
  });

  return singleElements;
};

const myArray = [1, 2, 3, 4, 2, 3, 5];
const uniqueArray = [...new Set(myArray)];
console.log(uniqueArray);

let arr2 = [3, 5, "g", 5, "d", 3, "d", 3, 2];
console.log(removeDuplicates(arr2));

const concatArrays = (arr) => {
  const arrayJoined = arr.map((el) => {
    const joinElements = el.reduce((acc, value) => {
      return acc + " " + value;
    });
    return joinElements;
  });
  return arrayJoined;
};

const concatArrays2 = (arr) => {
  const joinElements = arr.reduce((acc, value) => {
    return acc.concat(value.join(" "));
  }, []);
  return joinElements;
};

let data = [
  ["The", "little", "horse"],
  ["Plane", "over", "the", "ocean"],
];
console.log(concatArrays(data));
console.log(concatArrays2(data));
