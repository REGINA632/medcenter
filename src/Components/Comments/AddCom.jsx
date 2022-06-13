import { Button, Container, TextField, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContextProvider";
import { useComContext } from "../../Contexts/ComContextProvider";
import SendIcon from "@mui/icons-material/Send";
import { notify, notifyError } from "../Tostify/Toastify";
import { Form } from "react-bootstrap";

const AddCom = () => {
  const { addCom, getCom } = useComContext();
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
  });

  useEffect(() => {
    setValues({ ...values, author: currentUser.user });
  }, [currentUser]);

  const handleChange = (e) => {
    let newCom = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newCom);
  };

  function handleClick() {
    if (!values.title) {
      notify("error", "You can not send empty blank!");
    } else {
      addCom(values);
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
        author: currentUser.user,
        prodId: +prodId,
      });
      getCom(prodId);
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
        <h3 style={{ color: "black" }}>Форма первичного осмотра</h3>
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
          <Grid item xs={12} md={1}>
            <label>Жалобы</label>
          </Grid>
          <Grid item xs={12} md={11}>
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
          <Grid item xs={12} md={3}>
            <label>Наследственность (не) отягощена,</label>
          </Grid>
          <Grid item xs={12} md={9}>
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
          <Grid item xs={12} md={3.2}>
            <label>Аллергоанамнез: спокоен,отягощен</label>
          </Grid>
          <Grid item xs={12} md={8.8}>
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
          <Grid item xs={12} md={2.5}>
            <label>Перенесенные заболевания</label>
          </Grid>
          <Grid item xs={12} md={9.5}>
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
          <Grid item xs={12} md={1.8}>
            <label>Вредные привычки:</label>
          </Grid>
          <Grid item xs={12} md={10.2}>
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
          <Grid item xs={12} md={1.7}>
            <label>Кожные покровы:</label>
          </Grid>
          <Grid item xs={12} md={10.3}>
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
          <Grid item xs={12} md={1.3}>
            <label>Особенности</label>
          </Grid>
          <Grid item xs={12} md={10.7}>
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
          <Grid item xs={12} md={1}>
            <label>Отеки:</label>
          </Grid>
          <Grid item xs={12} md={11}>
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
            <label>Легкие:</label>
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
            <label>Хрипы:</label>
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
          <Grid item xs={12} md={3}>
            <label>Пульс наполнение и напряжение:</label>
          </Grid>
          <Grid item xs={12} md={9}>
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
          <Grid item xs={12} md={5.5}>
            <label>
              Сердечные шумы-функциональные,органические.Особенности:
            </label>
          </Grid>
          <Grid item xs={12} md={6.5}>
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
          <Grid item xs={12} md={3}>
            <label>ПРЕДВАРИТЕЛЬНЫЙ ДИАГНОЗ:</label>
          </Grid>
          <Grid item xs={12} md={9}>
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
          <Grid item xs={12} md={2.3}>
            <label>ПЛАН ОБСЛЕДОВАНИЯ:</label>
          </Grid>
          <Grid item xs={12} md={9.7}>
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

export default AddCom;
