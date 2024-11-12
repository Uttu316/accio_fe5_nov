const api = () => {
  return new Promise((res, rej) => {
    console.log("A");
    setTimeout(() => {
      console.log("B");
      res("Hey");
      console.log("C");
    }, 2000);
  });
};

async function getProfile() {
  console.log("D");
  let data = await api();
  console.log("E");
  const nData = await api();
  console.log("F");
  return nData + data;
}

getProfile().then((v) => {
  console.log(v);
});
console.log("G");
