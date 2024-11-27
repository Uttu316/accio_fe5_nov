import { useParams } from "react-router";

const PetDetails = () => {
  const { pet, petId } = useParams();

  return (
    <div id="pet_details">
      <h1>
        I am {pet} {petId}
      </h1>
    </div>
  );
};

export default PetDetails;
