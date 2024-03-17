const myArray = [1, 2, 3, 4, 2, 3, 1];
const uniqueValue = myArray.reduce((acc, value) => {
  if (!acc.includes(value)) {
    return acc.concat(value);
  }
  let indx = acc.indexOf(value);
  acc.splice(indx, 1);
  return acc;
}, []);
console.log(uniqueValue[0]);

const uniqueValue2 = myArray.find(
  (value) => myArray.indexOf(value) === myArray.lastIndexOf(value)
);

console.log(uniqueValue2);

const myArray2 = [1, 2, 3, 4, 2, 4, 1];
const uniqueValue3 = myArray2.reduce((acc, value) => {
  console.log(acc ^ value);
  return acc ^ value;
}, 0);
console.log(uniqueValue3);
