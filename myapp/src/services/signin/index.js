import { api } from "..";

export const signin = async (data) => {
  try {
    const res = await api({
      path: "users/login",
      method: "POST",
      body: data,
    });

    // console.log(res);
    const token = res.accessToken;
    if (token) {
      localStorage.setItem("token", token);
      return res.user;
    }
    throw new Error("User not valid");
  } catch (e) {
    const errorMessage = e.message;
    return Promise.reject(errorMessage);
  }
};
