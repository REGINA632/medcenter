import { Button, Container, TextField, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { useComContext } from "../../Contexts/ComContextProvider";
import SendIcon from "@mui/icons-material/Send";
import { notify, notifyError } from "../Tostify/Toastify";
import { Form } from "react-bootstrap";
import { useRepContext } from "../../Contexts/RepContextProvider";

const AddRep = () => {
  const { addRep, getRep } = useRepContext();
  const { currentUser } = useAuth();
  const { prodId } = useParams();

  const [values, setValues] = useState({
    author: "",
    prodId: +prodId,
    title: "",
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    title7: "",
    title8: "",
    title9: "",
    title10: "",
    title11: "",
    title12: "",
    title13: "",
    title14: "",
  });

  useEffect(() => {
    setValues({ ...values, author: currentUser.user });
  }, [currentUser]);

  const handleChange = (e) => {
    let newRep = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newRep);
  };

  function handleClick() {
    if (!values.title) {
      notify("error", "Вы не заполнили форму");
    } else {
      addRep(values);
      setValues({
        data: "",
        title: "",
        title1: "",
        title2: "",
        title3: "",
        title4: "",
        title5: "",
        title6: "",
        title7: "",
        title8: "",
        title9: "",
        title10: "",
        title11: "",
        title12: "",
        title13: "",
        title14: "",
        author: currentUser.user,
        prodId: +prodId,
      });
      getRep(prodId);
      btnFilter();
    }
  }

  const [filter, setFilter] = useState(false);

  const btnFilter = () => {
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };

  return (
    <Container>
      <Button onClick={btnFilter}>
        <h3 style={{ color: "black" }}>Форма повторного осмотра</h3>
      </Button>
      <Container style={{ display: filter ? "block" : "none" }}>
        {/* <Container sx={{ display: "flex", flexDirection: "column" }}> */}
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
          }}
        >
          <Grid item xs={12} md={1}>
            <label>Дата</label>
          </Grid>
          <Grid item xs={12} md={11}>
            <TextField
              id="date standard-basic"
              variant="standard"
              label="Дата заполнения формы"
              type="date"
              sx={{ width: 220, margin: "10px 0", padding: "0" }}
              InputLabelProps={{
                shrink: true,
              }}
              value={values.data}
              onChange={(e) => handleChange(e)}
              name="data"
            />
          </Grid>
          <Grid item xs={12} md={2.7}>
            <label>Жалобы: На момент осмотра</label>
          </Grid>
          <Grid item xs={12} md={9.3}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title}
              onChange={(e) => handleChange(e)}
              name="title"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1.7}>
            <label>Общее состояние:</label>
          </Grid>
          <Grid item xs={12} md={10.3}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title1}
              onChange={(e) => handleChange(e)}
              name="title1"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1.7}>
            <label>Кожные покровы:</label>
          </Grid>
          <Grid item xs={12} md={10.3}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title2}
              onChange={(e) => handleChange(e)}
              name="title2"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1.9}>
            <label>Видимые слизистые:</label>
          </Grid>
          <Grid item xs={12} md={10.1}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title3}
              onChange={(e) => handleChange(e)}
              name="title3"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1.5}>
            <label>Аускультативно:</label>
          </Grid>
          <Grid item xs={12} md={10.5}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title4}
              onChange={(e) => handleChange(e)}
              name="title4"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={3.4}>
            <label>Периферические лимфатические узлы:</label>
          </Grid>
          <Grid item xs={12} md={8.6}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title5}
              onChange={(e) => handleChange(e)}
              name="title5"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <label>Отеки:</label>
          </Grid>
          <Grid item xs={12} md={11}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title6}
              onChange={(e) => handleChange(e)}
              name="title6"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={2.5}>
            <label>Аускультация: Тоны сердца</label>
          </Grid>
          <Grid item xs={12} md={9.5}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title7}
              onChange={(e) => handleChange(e)}
              name="title7"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <label>ритм</label>
          </Grid>
          <Grid item xs={12} md={11}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title8}
              onChange={(e) => handleChange(e)}
              name="title8"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <label>ЧСС</label>
          </Grid>
          <Grid item xs={12} md={11}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title9}
              onChange={(e) => handleChange(e)}
              name="title9"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <label>Патологические шумы</label>
          </Grid>
          <Grid item xs={12} md={10}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title10}
              onChange={(e) => handleChange(e)}
              name="title10"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={2.3}>
            <label>Артериальное давление:</label>
          </Grid>
          <Grid item xs={12} md={9.7}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title11}
              onChange={(e) => handleChange(e)}
              name="title11"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4.1}>
            <label>Лабораторно-инструментальные обследования</label>
          </Grid>
          <Grid item xs={12} md={7.9}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title12}
              onChange={(e) => handleChange(e)}
              name="title12"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <label>ДИАГНОЗ:</label>
          </Grid>
          <Grid item xs={12} md={11}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title13}
              onChange={(e) => handleChange(e)}
              name="title13"
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={1.7}>
            <label>ПЛАН ЛЕЧЕНИЯ:</label>
          </Grid>
          <Grid item xs={12} md={10.3}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={values.title14}
              onChange={(e) => handleChange(e)}
              name="title14"
              multiline
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          onClick={handleClick}
          type="submit"
          variant="contained"
          className="text-button"
          sx={{ marginTop: "20px" }}
        >
          Сохранить
        </Button>
        {/* </Container> */}
      </Container>
    </Container>
  );
};

export default AddRep;
