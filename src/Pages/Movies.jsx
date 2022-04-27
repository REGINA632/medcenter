import { Container } from "@mui/material";
import React from "react";
import ProdList from "../Components/Movies/ProdList/ProdList";

const Movies = () => {
  return (
    <>
      <Container>
        <h1>Disney Movies</h1>
        <ProdList />
      </Container>
    </>
  );
};

export default Movies;
