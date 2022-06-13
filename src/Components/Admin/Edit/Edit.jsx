import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Form from "../Form/Form";
import { useProductContext } from "../../../Contexts/MoviesContextProvider";

const Edit = () => {
  const navigate = useNavigate();
  const { oneProd, getOneProduct, saveEditedProd } = useProductContext();
  return (
    <div>
      <Button
        onClick={() => navigate(-1)}
        variant="outlined"
        align="left"
        style={{
          textDecoration: "none",
          marginTop: "15px",
          color: "black",
          width: "260px",
          textAlign: "end",
        }}
      >
        Назад
      </Button>
      {/* <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton> */}

      <h2>Редактировать</h2>
      <Form
        saveValues={saveEditedProd}
        compForEdit={true}
        oneProd={oneProd}
        getOneProduct={getOneProduct}
      />
    </div>
  );
};

export default Edit;
