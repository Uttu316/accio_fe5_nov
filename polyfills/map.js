Array.prototype.map = function (callback) {
  if (typeof callback === "function") {
    let arr = this;

    let n = arr.length;

    let out = [];

    for (let i = 0; i < n; i++) {
      let value = callback(arr[i] + " Hello", i, arr);
      out.push(value);
    }

    return out;
  }

  throw new Error("Argument is not a function");
};
let arr = ["A", "B", "C"];

let out = arr.map((item, index, arr) => {
  return item + "w";
});
console.log(out);
