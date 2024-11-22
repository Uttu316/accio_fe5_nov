import { useCallback, useEffect, useMemo, useState } from "react";
import { api } from "../../services";
import Offer from "../offer";

const Hooks = () => {
  const [dogs, setDogs] = useState([]);
  const [status, setStatus] = useState("loading");
  const [offer, setOffer] = useState(false);

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "done";

  const isDogs = isSuccess && !!dogs.length;
  const noDogs = isSuccess && !dogs.length;

  const offerDetails = useMemo(() => {
    return { title: "Offer Valid Till" };
  }, []);

  const onReload = useCallback(() => {
    window.location.reload();
  },[]);

  const getDogs = async () => {
    setStatus("loading");
    try {
      const data = await api({ path: "/dogs" });
      setStatus("done");
      if (data && data.data) {
        const dogs = data.data;
        if (Array.isArray(dogs)) {
          setDogs(dogs);
        }
      }
    } catch (e) {
      setStatus("error");
      console.log(e);
    }
  };

  const toggleOffer = () => {
    setOffer(!offer);
  };
  const onResetDogs = () => {
    setDogs([]);
  };

  useEffect(() => {
    getDogs();
  }, []);

  useEffect(() => {
    if (status === "done" || status === "error") {
      setOffer(true);
    }
  }, [status]);

  console.log("I am rendered");
  return (
    <div>
      <h1>Let's learn Hooks</h1>

      <div>
        {isLoading && <h2>Loading ...</h2>}
        {isError && (
          <h2>
            Opps Something went wrong,{" "}
            <button onClick={onReload}>Reload</button>
          </h2>
        )}
        {isDogs && dogs.map((item) => <p key={item.id}>{item.name}</p>)}
        {noDogs && <h2>No dogs available</h2>}
        {offer && <Offer offerDetails={offerDetails} />}
        <button onClick={onResetDogs}>Reset Dogs</button>
        <button onClick={toggleOffer}>{offer ? "Hide" : "Show"} Offer</button>
      </div>
    </div>
  );
};

export default Hooks;
