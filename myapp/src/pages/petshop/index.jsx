import PetList from "../../components/petlist";
import HeroBanner from "../../components/heroBanner";
import PetProvider from "../../contexts/petContext";
import { useEffect, useRef } from "react";

const PetShop = () => {
  const ref = useRef();
  const offerRef = useRef(null);

  useEffect(() => {
    offerRef.current.style.color = "green";

    ref.current.style.background = "pink";
    ref.current.classList.add("container");
  }, []);

  return (
    <div ref={ref} id="petshop">
      <PetProvider>
        <HeroBanner ref={offerRef} />

        <PetList petTitle={"Dogs"} pet={"dogs"} />
        <PetList petTitle={"Cats"} pet={"cats"} />
        <div dangerouslySetInnerHTML={{ __html: "# Heading level 1" }} />
      </PetProvider>
    </div>
  );
};

export default PetShop;
