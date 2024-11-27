import React, { useState } from "react";

export const PetContext = React.createContext();

const PetProvider = (props) => {
  const { children } = props;

  const [offer, setoffer] = useState("20% off");
  console.log(children);
  return (
    <PetContext.Provider value={{ offer, setoffer }}>
      {children}
    </PetContext.Provider>
  );
};

export default PetProvider;
