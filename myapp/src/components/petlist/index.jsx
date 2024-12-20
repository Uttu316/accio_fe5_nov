import { useEffect, useState } from "react";
import LoaderCard from "../loaderCard";
import styles from "./styles.module.css";
import ListLoader from "../listLoader";
import { getPets } from "../../services/pets";
import PetCard from "../petCard";
import useApiStatus from "../../hooks/useAPIStatus";

const PetList = (props) => {
  const { petTitle, pet } = props;

  const [pets, setPets] = useState([]);

  const { isDone, isLoading, setStatus } = useApiStatus();

  const hasPets = isDone && !!pets.length;

  const noPets = isDone && !pets.length;

  const loadPets = async () => {
    setStatus("loading");

    try {
      const pets = await getPets(pet);
      setStatus("done");
      setPets(pets);
    } catch (e) {
      setStatus("error");
    }
  };

  useEffect(() => {
    loadPets();
  }, []);

  return (
    <section className={styles.listWrapper}>
      <h2 className={styles.listTitle}>{petTitle}</h2>

      <div className={styles.listContainer}>
        {isLoading && <ListLoader length={3} />}

        {hasPets &&
          pets.map((item, index) => (
            <PetCard
              key={item.id}
              pet={pet}
              name={item.name}
              id={item.id}
              image={item.image}
              desc={item.description}
              subtitle={item.subtitle}
            />
          ))}
      </div>
    </section>
  );
};

export default PetList;
