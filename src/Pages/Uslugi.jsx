import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Uslugi = () => {
  return (
    <div>
      <Container>
        <h2
          id="servic"
          style={{ textAlign: "center", fontSize: "30px", marginTop: "50px" }}
        >
          НАШИ УСЛУГИ
        </h2>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContext: "space-evenly",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              width="100%"
              src="https://doktor-s-vami.ru/upload/000/u1/aa/30/c38dd454.jpg"
              alt=""
            />
            <Typography variant="h6" align="center" m="20px 0 ">
              Кардиолог
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderRadius: "50px" }}
              component={Link}
              to="/kardiolog"
            >
              Подробнее
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              width="100%"
              src="https://kdc.clinic/wp-content/uploads/eho-kg-2.jpg"
              alt=""
            />
            <Typography variant="h6" align="center" m="20px 0 ">
              Эхокардиография (ЭхоКГ)
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderRadius: "50px" }}
              component={Link}
              to="/echocg"
            >
              Подробнее
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              width="100%"
              src="https://medkomcenter.ru/upload/medialibrary/2c6/2c6e9d5a980d9e0b4a29b32d1be22bee.jpg"
              alt=""
            />
            <Typography variant="h6" align="center" m="20px 0 ">
              Электрокардиограмма (ЭКГ){" "}
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderRadius: "50px" }}
              component={Link}
              to="/ecg"
            >
              Подробнее
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              width="100%"
              src="https://onlyclinic.ru/sites/default/files/inline-images/%D0%B2%D0%B5%D0%BB%D0%BE%D1%8D%D1%80%D0%B3%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%8F%20%D0%B2%20%D0%BD%D0%B8%D0%B6%D0%BD%D0%B5%D0%BC%20%D0%BD%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B5_0.jpg"
              alt=""
            />
            <Typography variant="h6" align="center" m="20px 0 ">
              Велоэргометрия (ВЭМ)
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderRadius: "50px" }}
              component={Link}
              to="/vem"
            >
              Подробнее
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContext: "space-evenly",
            margin: "20px 0",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              width="100%"
              src="https://doktorpozvonkov.ru/wp-content/uploads/sutochniy-monitoring-davlenia.jpg"
              alt=""
            />
            <Typography variant="h6" align="center" m="20px 0 ">
              Суточное АД-мониторирование
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderRadius: "50px" }}
              component={Link}
              to="/ad"
            >
              Подробнее
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              width="100%"
              src="https://www.kardiocentr.kg/img/service/07%20%D0%9A%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F.jpg"
              alt=""
            />
            <Typography variant="h6" align="center" m="20px 0 ">
              Коронарография (КАГ) Стентирование
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderRadius: "50px" }}
              component={Link}
              to="/kag"
            >
              Подробнее
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              width="100%"
              src="https://www.kardiocentr.kg/img/service/09.jpg"
              alt=""
            />
            <Typography variant="h6" align="center" m="20px 0 ">
              АОРТОКОРОНАРНОЕ ШУНТИРОВАНИЕ (АКШ){" "}
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderRadius: "50px" }}
              component={Link}
              to="/aksh"
            >
              Подробнее
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              width="100%"
              src="https://www.kardiocentr.kg/img/service/12.jpg"
              alt=""
            />
            <Typography variant="h6" align="center" m="20px 0 ">
              Установка электрокардиостимулятора{" "}
            </Typography>
            <Button
              variant="outlined"
              sx={{ borderRadius: "50px" }}
              component={Link}
              to="/kardiostim"
            >
              Подробнее
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Uslugi;
