import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getPet } from "../../services/pets";
import useApiStatus from "../../hooks/useAPIStatus";

const PetDetails = () => {
  const { pet, petId } = useParams();
  const [petInfo, setPetinfo] = useState(null);
  const { isDone, isError, isLoading, setStatus } = useApiStatus();

  const validPet = isDone && !!petInfo;
  const inVaidPet = isDone && !petInfo;

  const getPetData = async () => {
    setStatus("loading");
    try {
      const data = await getPet(pet, petId);
      setPetinfo(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (pet && petId) {
      getPetData();
    }
  }, [pet, petId]);
  return (
    <div id="pet_details">
      <h1>
        I am {pet} {petId}
      </h1>
      {isLoading && <h2>Loading...</h2>}

      {isError && (
        <div>
          <h2>Something went wrong</h2>
          <Link to="/petshop">Go to Petshop</Link>
        </div>
      )}

      {inVaidPet && (
        <div>
          <h2>Oops! The pet is not available</h2>
          <Link to="/petshop">Go to Petshop</Link>
        </div>
      )}

      {validPet && (
        <div>
          <div>
            <img
              height={320}
              width={320}
              src={petInfo.image}
              alt={petInfo.name}
            />
          </div>
          <h3>{petInfo.name}</h3>
          <h4>{petInfo.temperament}</h4>
          <h5>{petInfo.breed}</h5>
          <p>
            <b>Weight:</b> {petInfo.weight}
          </p>
          <p>
            <b>About -</b>
            <p>{petInfo.description}</p>
          </p>
          <p>
            <b>Life Span:</b> <i>{petInfo.life_span}</i>
          </p>
          <Link to="/petshop">Go to Petshop</Link>
        </div>
      )}
    </div>
  );
};

export default PetDetails;
