import React from "react";
import HomeGrid from "../../components/HomeGrid/HomeGrid";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";
import ContentHint from "../../components/ContentHint/ContentHint";
import PizzaGrid from "../../components/PizzaGrid/PizzaGrid";

const Home = () => {
  return (
    <>
      <HomeGrid>Get inspired with these popular recipes</HomeGrid>
      <ContentHint></ContentHint>
      <HorizontalLine>Pizza Recipes</HorizontalLine>
      <PizzaGrid></PizzaGrid>
    </>
  );
};

export default Home;
