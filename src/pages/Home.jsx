import React from "react";
import "../App.css";
import Cards from "../components/card/Cards";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
