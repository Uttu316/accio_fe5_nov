import React from "react";
import LoaderCard from "../loaderCard";

const ListLoader = ({ length = 4 }) => {
  const dummyCards = new Array(length).fill(1);

  return (
    <React.Fragment>
      {dummyCards.map((i, index) => (
        <LoaderCard key={index} />
      ))}
    </React.Fragment>
  );
};

export default ListLoader;
