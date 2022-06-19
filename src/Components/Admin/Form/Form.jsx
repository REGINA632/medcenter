import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import "./Form.css";
import { useProductContext } from "../../../Contexts/MoviesContextProvider";

const slots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
];

const initValues = {
  фио: "",
  телефон: "",
  врач: "",
  инн: "",
  data: "",
  time: "",
};

const Form = ({ saveValues, compForEdit, oneProd, getOneProduct }) => {
  const { products, getProducts } = useProductContext();
  const [inpValues, setInpValues] = useState(initValues);
  const [theDate, setDate] = useState("");
  const { id } = useParams();

  const datePatients = useMemo(() => {
    const res = [];
    products.forEach((patient) => {
      if (patient.data === theDate) {
        res.push(patient.time);
      }
    });
    return res;
  }, [theDate, products]);
  useEffect(() => {
    getProducts();
  }, []);

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
  }, [compForEdit, oneProd]);

  //end of for edit

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };
  // const handleTimeChange = (e) => {
  //   setTime(e.target.value);
  //   let obj = {
  //     ...inpValues,
  //     [e.target.name]: e.target.value,
  //   };
  //   setInpValues(obj);
  // };
  const handleDateChange = (e) => {
    setDate(e.target.value);
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
          name="фио"
          value={inpValues.фио}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="ФИО"
          variant="outlined"
        />

        {/* <TextField
          className="text-field"
          name="фамилия"
          value={inpValues.фамилия}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Фамилия"
          variant="outlined"
        />
        <TextField
          className="text-field"
          name="отчество"
          value={inpValues.отчество}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Отчество"
          variant="outlined"
        /> */}
        {/* <TextField
          className="text-field"
          name="дата_рождение"
          value={inpValues.дата_рождение}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Дата Рождения"
          variant="outlined"
        /> */}
        {/* <TextField
          className="text-field"
          variant="outlined"
          id="date outlined-basic"
          label="Дата Рождения"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={inpValues.дата_рождение}
          onChange={(e) => handleChange(e)}
          name="дата_рождение"
        />
        <TextField
          className="text-field"
          name="номер_паспорта"
          value={inpValues.номер_паспорта}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Паспортные данные"
          variant="outlined"
        /> */}
        <TextField
          className="text-field"
          name="инн"
          value={inpValues.инн}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="ИНН"
          variant="outlined"
          rows={3}
        />
        {/* <FormControl className="text-field">
          <InputLabel id="demo-simple-select-label">Город</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="город"
            value={inpValues.город}
            label="Город"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Намозов Улугбек Тагойбекович"}>Бишкек </MenuItem>
          </Select>
        </FormControl>
        <FormControl className="text-field">
          <InputLabel id="demo-simple-select-label">Район</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="район"
            value={inpValues.район}
            label="Район"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Ленинский р-он"}>Ленинский р-он</MenuItem>
            <MenuItem value={"Октябрьский р-он"}>Октябрьский р-он</MenuItem>
            <MenuItem value={"Первомайский р-он"}>Первомайский р-он</MenuItem>
            <MenuItem value={"Свердловский р-он"}>Свердловский р-он</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="text-field"
          name="адрес"
          value={inpValues.адрес}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Улица/Дом"
          variant="outlined"
        /> */}
        <TextField
          className="text-field"
          name="телефон"
          value={inpValues.телефон}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Номер телефона"
          variant="outlined"
        />
        {/* <TextField
          className="text-field"
          name="почта"
          value={inpValues.почта}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Адрес электронной почты"
          variant="outlined"
        /> */}
        <FormControl className="text-field">
          <InputLabel id="demo-simple-select-label">Врач</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="врач"
            value={inpValues.врач}
            label="Врач"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Намозов Улугбек Тагойбекович"}>
              Намозов Улугбек Тагойбекович
            </MenuItem>
            <MenuItem value={"Магоматова Лариса Руслановна"}>
              Магоматова Лариса Руслановна
            </MenuItem>
            <MenuItem value={"Ряскин Владимир Иванович"}>
              Ряскин Владимир Иванович
            </MenuItem>
            <MenuItem value={"Жаринова Мария Владимировна"}>
              Жаринова Мария Владимировна
            </MenuItem>
            <MenuItem value={"Маленков Дмитрий Андреевич"}>
              Маленков Дмитрий Андреевич
            </MenuItem>
          </Select>
        </FormControl>
        {/* <TextField
          className="text-field"
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Примечание"
          variant="outlined"
        /> */}
        <TextField
          className="text-field"
          variant="outlined"
          id="date outlined-basic"
          label="Дата"
          type="date"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={inpValues.data}
          onChange={(e) => handleDateChange(e)}
          name="data"
        />
        <FormControl className="text-field">
          <InputLabel id="demo-simple-select-label">Время</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="time"
            value={inpValues.time}
            label="Время"
            onChange={(e) => handleChange(e)}
          >
            {slots && slots.length ? (
              slots.map((slot) => {
                const isDisabled = datePatients.includes(slot);
                return (
                  <MenuItem disabled={isDisabled} key={slot} value={slot}>
                    {slot}
                  </MenuItem>
                );
              })
            ) : (
              <p>No Free Time</p>
            )}
            {/* <MenuItem value={"09:00"}>09:00</MenuItem>
            <MenuItem value={"09:30"}>09:30</MenuItem>
            <MenuItem value={"10:00"}>10:00</MenuItem>
            <MenuItem value={"10:30"}>10:30</MenuItem>
            <MenuItem value={"11:00"}>11:00</MenuItem>
            <MenuItem value={"11:30"}>11:30</MenuItem>
            <MenuItem value={"12:00"}>12:00</MenuItem>
            <MenuItem value={"12:30"}>12:30</MenuItem> */}
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" className="text-button">
          Сохранить
        </Button>
        {/* <Button
          type="submit"
          variant="contained"
          color="warning"
          className="text-button"
        >
          Submit
        </Button> */}
      </form>
    </div>
  );
};

export default Form;
