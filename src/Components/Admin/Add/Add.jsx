import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import Form from "../Form/Form";
import { useProductContext } from "../../../Contexts/MoviesContextProvider";

const Add = () => {
  const navigate = useNavigate();
  const { addProduct } = useProductContext();
  return (
    <div>
      <Button
        onClick={() => navigate(-1)}
        variant="contained"
        style={{ textDecoration: "none" }}
      >
        Назад
      </Button>
      {/* <IconButton onClick={() => navigate(-1)}>
        <ArrowLeftIcon fontSize="large" /> Назад
      </IconButton> */}
      <h2 style={{ textAlign: "center" }}>Заполните фому</h2>
      <Form saveValues={addProduct} compForEdit={false} />
    </div>
  );
};

export default Add;
