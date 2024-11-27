import { useEffect, useState } from "react";
import LoaderCard from "../loaderCard";
import styles from "./styles.module.css";
import ListLoader from "../listLoader";
import { getPets } from "../../services/pets";
import PetCard from "../petCard";

const PetList = (props) => {
  const { petTitle, petCategory, pet } = props;

  const [pets, setPets] = useState([]);
  const [status, setStatus] = useState(false);

  const isLoading = status === "loading";
  const isDone = status === "done";

  const isError = status === "error";

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
              pet={petCategory}
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
