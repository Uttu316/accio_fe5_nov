import PetList from "../../components/petlist";
import HeroBanner from "../../components/heroBanner";
import PetProvider from "../../contexts/petContext";

const PetShop = () => {
  return (
    <div id="petshop">
      <PetProvider>
        <HeroBanner />

        <PetList petTitle={"Dogs"} pet={"dogs"} />
        <PetList petTitle={"Cats"} pet={"cats"} />
      </PetProvider>
    </div>
  );
};

export default PetShop;
