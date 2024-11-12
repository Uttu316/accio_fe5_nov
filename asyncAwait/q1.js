const api = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hey");
    }, 2000);
  });
};

const getProfile = async () => {
  try {
    console.log("B");
    const data = await api();
    console.log("C");
    // throw "oops"
    return data;
  } catch (e) {
    console.log("caught", e);
    throw e;
  }
};

getProfile()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error", err);
  });
console.log("D");
