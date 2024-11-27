import PetList from "../../components/petlist";
import HeroBanner from "../../components/heroBanner";

const PetShop = () => {
  return (
    <div id="petshop">
      <HeroBanner />
      <PetList petTitle={"Dogs"} pet={"dogs"} petCategory={"dog"} />
      <PetList petTitle={"Cats"} pet={"cats"} petCategory={"cat"} />
    </div>
  );
};

export default PetShop;
