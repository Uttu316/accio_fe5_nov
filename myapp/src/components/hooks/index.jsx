import { useEffect, useState } from "react";
import { api } from "../../services";

const Hooks = () => {
  const [dogs, setDogs] = useState([]);
  const [status, setStatus] = useState("loading");

  const isLoading = status === "loading";
  const isError = status === "error";
  const isSuccess = status === "done";

  const isDogs = isSuccess && !!dogs.length;
  const noDogs = isSuccess && !dogs.length;

  const onReload = () => {
    window.location.reload();
  };

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

  useEffect(() => {
    getDogs();
  }, []);

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
      </div>
    </div>
  );
};

export default Hooks;
