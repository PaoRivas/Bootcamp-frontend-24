console.log("1"); //1
setTimeout(() => console.log("2"), 0); //5
Promise.resolve().then(() => console.log(2)); //3
Promise.resolve().then(() => {
  console.log(4); //4
  setTimeout(() => console.log(5), 0);
}); //7
setTimeout(() => console.log(6), 0); //6
console.log(7); //2
