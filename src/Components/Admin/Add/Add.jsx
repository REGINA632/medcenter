import React from "react";

import { useNavigate } from "react-router-dom";

import { IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import Form from "../Form/Form";
import { useProductContext } from "../../../Contexts/MoviesContextProvider";

const Add = () => {
  const navigate = useNavigate();
  const { addProduct } = useProductContext();
  return (
    <div style={{ textAlign: "center" }}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowLeftIcon fontSize="large" /> Go Back
      </IconButton>
      <h2 style={{ color: "orange" }}>Add new product</h2>
      <Form saveValues={addProduct} compForEdit={false} />
    </div>
  );
};

export default Add;
