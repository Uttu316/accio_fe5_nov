export const validEmail = (email) => {
  if (!email) return false;

  let emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/gm;

  const isValidEmail = emailRegex.test(email);

  return isValidEmail;
};

export const validPassword = (password) => {
  if (!password) return false;

  let passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const isValiPassword = passwordRegex.test(password);

  return isValiPassword;
};
