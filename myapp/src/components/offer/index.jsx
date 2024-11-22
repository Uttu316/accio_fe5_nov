import { useEffect, useState } from "react";

const Offer = (props) => {
    const {offerDetails} = props;
  console.log("Offer Render");

  const [time, setTime] = useState(10);

  useEffect(() => {
    console.log("Offer Rendered first time");

    let timer = setInterval(() => {
      console.log("I am timer");
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        }

        clearInterval(timer);
        return prevTime;
      });
    }, 1000);


  

    return () => {
      //cleanup
      clearInterval(timer);
      console.log("Offer Unmounting");
    };
  }, []);

  
  useEffect(()=>{
    console.log('Offer details changed',offerDetails)
},[offerDetails])
  return (
    <div>
      <h2>Get 70% off</h2>
      {time} left
    </div>
  );
};

export default Offer;
