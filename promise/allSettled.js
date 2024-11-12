const api = () => {
  return parseInt(Math.random() * 100);
};

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const n = api();
    resolve(n + "A");
  }, 2000);
});
let x = new Promise((res, rej) => {
  setTimeout(() => {
    const n = api();
    rej(n + "B");
  }, 3000);
});
let y = new Promise((res, rej) => {
  setTimeout(() => {
    const n = api();
    res(n + "C");
  }, 1000);
});

let k = Promise.allSettled([p, x, y]);

k.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log("catch", error);
});
