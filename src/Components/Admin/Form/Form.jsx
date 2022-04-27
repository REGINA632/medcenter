import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

import "./Form.css";

const initValues = {
  title: "",
  type: "",
  price: "",
  description: "",
  img: "",
  data: "",
  producer: "",
  cast: "",
  img2: "",
  trailer: "",
  count: 0,
};

const Form = ({ saveValues, compForEdit, oneProd, getOneProduct }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  //for edit
  useEffect(() => {
    if (compForEdit) {
      getOneProduct(id);
    }
  }, []);

  useEffect(() => {
    if (compForEdit && oneProd) {
      setInpValues(oneProd);
    }
  }, [oneProd]);

  //end of for edit

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
      price: +inpValues.price,
    };

    saveValues(obj);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        className="form"
      >
        <TextField
          className="text-field"
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Title"
          variant="outlined"
        />
        <FormControl className="text-field">
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="type"
            value={inpValues.type}
            label="Type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Action/Adventure"}>Action/Adventure</MenuItem>
            <MenuItem value={"Animation"}>Animation</MenuItem>
            <MenuItem value={"Classics"}>Classics</MenuItem>
            <MenuItem value={"Comedy"}>Comedy</MenuItem>
            <MenuItem value={"Drama"}>Drama</MenuItem>
            <MenuItem value={"Fantasy"}>Fantasy</MenuItem>
            <MenuItem value={"Musical"}>Musical</MenuItem>
            <MenuItem value={"Romance"}>Romance</MenuItem>
            <MenuItem value={"Science Fiction"}>Science Fiction</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="text-field"
          name="price"
          value={inpValues.price}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Price"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="img"
          value={inpValues.img}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="description"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={3}
        />
        <TextField
          className="text-field"
          name="data"
          value={inpValues.data}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Data"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="produced"
          value={inpValues.produced}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Produced"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="cast"
          value={inpValues.cast}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Cast"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="img2"
          value={inpValues.img2}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Image2"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="trailer"
          value={inpValues.trailer}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Trailer"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="film"
          value={inpValues.film}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Film"
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="warning"
          className="text-button"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
