import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import List from "./components/list";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <List/>
      <Footer />
    </React.Fragment>
  );
};

export default App;
