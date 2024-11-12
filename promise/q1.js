console.log("M");
let p = new Promise((resolve, reject) => {
  console.log("A");

  reject("Y");
  console.log("P");
});

console.log("J");

p.then((data) => {
  console.log("D", data);
}).catch((error) => {
  console.log("F", error);
});
console.log("Q");
