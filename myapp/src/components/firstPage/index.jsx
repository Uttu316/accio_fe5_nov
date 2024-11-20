import React from "react"
import Footer from "../footer"
import Header from "../header"
import Hero from "../hero"
import List from "../list"


const FirstPage = ()=>{
    return (
        <React.Fragment>
        <Header />
        <Hero />
        <List/>
        <Footer />
      </React.Fragment>
    )
}

export default FirstPage