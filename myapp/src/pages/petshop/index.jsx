import PetList from "../../components/petlist";
import HeroBanner from "../../components/heroBanner";

const PetShop = () => {
  return (
    <div id="petshop">
      <HeroBanner />
      <PetList petTitle={"Dogs"} />
      <PetList petTitle={"Cats"} />
    </div>
  );
};

export default PetShop;
