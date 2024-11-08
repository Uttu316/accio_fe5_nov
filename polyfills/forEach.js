Array.prototype.forEach = function (callback) {
  if (typeof callback === "function") {
    let arr = this;

    let n = arr.length;

    for (let i = 0; i < n; i++) {
      callback(arr[i] + " Hello", i, arr);
    }

    return;
  }

  throw new Error("Argument is not a function");
};
let arr = ["A", "B", "C"];

arr.forEach((item, index, arr) => {
  console.log(item);
});
