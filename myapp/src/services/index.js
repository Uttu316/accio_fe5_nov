export const api = async ({ path, method = "GET", body }) => {
  //calls a rest api which will load the data
  const URL = `https://api.freeapi.app/api/v1/${path}`;

  try {
    const res = await fetch(URL, {
      method: method,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    }); // return a response promise
    const data = await res.json(); // return JS object from response json

    if (data.success) {
      return data?.data;
    }
    throw new Error(data.message);
  } catch (e) {
    console.log("Error", e, URL);
    throw e;
  }
};
