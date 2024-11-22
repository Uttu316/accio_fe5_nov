import { useEffect } from "react"











const Offer = ()=>{
    console.log("Offer Render")


    useEffect(()=>{
        console.log("Offer Rendered first time")

        return ()=>{
            //cleanup
            console.log("Offer Unmounting")
        }
    },[])
    return (
        <div>
                   <h2>Get 70% off</h2> 
        </div>

    )
}

export default Offer