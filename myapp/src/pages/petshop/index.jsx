import PetList from "../../components/petlist";
import HeroBanner from "../../components/heroBanner";

const PetShop = () => {
  return (
    <div id="petshop">
      <HeroBanner />
      <PetList petTitle={"Dogs"} pet={"dogs"} />
      <PetList petTitle={"Cats"} pet={"cats"} />
    </div>
  );
};

export default PetShop;
