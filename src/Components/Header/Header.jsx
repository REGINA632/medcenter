import React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import headerFoto from "./Foto/headerFoto.png";

import { Link } from "react-router-dom";

import Carusel from "../Carusel/Carusel";

const Header = () => {
  return (
    <>
      <Box>
        <Grid
          spacing={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h4" align="left" ml="150px">
              МЫ ЗАСТАВИМ
            </Typography>
            <Typography variant="h4" align="left" m="0 0 20px 150px">
              ВАШЕ СЕРДЦЕ БИТЬСЯ
            </Typography>
            <Typography variant="subtitle1" align="left" ml="150px">
              Более 10 лет специализируемся
            </Typography>
            <Typography variant="subtitle1" align="left" ml="150px">
              на выполнении сложных операций на сердце
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <img width="100%" src={headerFoto} alt="" />
          </Grid>
        </Grid>
      </Box>

      {/* 2 наши преимущества */}
      <Container sx={{ marginTop: "40px" }}>
        <h2
          style={{ textAlign: "center", fontSize: "30px", marginTop: "50px" }}
        >
          НАШИ ПРЕИМУЩЕСТВА
        </h2>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            // alignItems: "baseline",
            justifyContext: "space-evenly",
            textAlign: "center",
            // backgroundColor: "#669bcc",
          }}
        >
          <Grid
            className="con-item"
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image="https://zdrav.expert/images/thumb/7/7c/638991e85d4b6e644dbcacdd30a34a32.jpg/840px-638991e85d4b6e644dbcacdd30a34a32.jpg"
                  alt=" "
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Современное медицинское оборудование и передовые технологии
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image="http://www.alemarmed.ru/images/article/oborydovanie-v-grecii.jpg"
                  alt="Ice Age: Scrat Tales"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Оперативная диагностикa оборудование и передовые технологии
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image="https://www.ckbran.ru/images/kompleksnoe_obsledovanie1.jpg"
                  alt="Walt Disney World"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Возможность получить комплексное медицинское обследование
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            // alignItems: "baseline",
            justifyContext: "space-evenly",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image="https://cdnimg.rg.ru/img/content/187/07/84/12_t_650x433.jpg"
                  alt=" Thor: Love and Thunder"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Наличие своей лаборатории
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image="https://homedoctor.com.ua/image/uploads/Kardiolog/15_main.jpg"
                  alt="Ice Age: Scrat Tales"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Ведущие кардиохирурги
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 400 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image="https://pacifichosp.com/static/img/medical-tourism/tiles/tile5.png?v=1"
                  alt="Walt Disney World"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Комфортные условия
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        {/* НАШИ УСЛУГИ */}
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

      {/* ВАС ЛЕЧАТ ВЫСОКОКВАЛИФИЦИРОВАННЫЕ СПЕЦИАЛИСТЫ */}
      <Container maxWidth="xl">
        <h2
          id="specialist"
          style={{ textAlign: "center", fontSize: "30px", marginTop: "50px" }}
        >
          ВАС ЛЕЧАТ ВЫСОКОКВАЛИФИЦИРОВАННЫЕ СПЕЦИАЛИСТЫ
        </h2>
        <Carusel />
      </Container>

      <Box sx={{ backgroundColor: "#fafafa" }}>
        <Container sx={{ marginTop: "50px", padding: "10px 0 40px 0" }}>
          <h2
            id="kontact"
            style={{
              textAlign: "center",
              fontSize: "30px",
              paddingBottom: "10px",
            }}
          >
            КОНТАКТЫ
          </h2>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContext: "space-evenly",
              // textAlign: "left",
              // color: "white",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1">
                Адреса филиалов в г. Бишкек
              </Typography>
              <Typography variant="h6" mt="10px">
                ул. Абдумомунова 236
              </Typography>
              <Typography variant="body2">(пер.Тоголок Молдо)</Typography>
              <Typography variant="h6" mt="10px">
                ул. Абдумомунова 236
              </Typography>
              <Typography variant="body2">(пер.Тоголок Молдо)</Typography>
              <Typography variant="h6" mt="10px">
                ул. Абдумомунова 236
              </Typography>
              <Typography variant="body2">(пер.Тоголок Молдо)</Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="subtitle1">Прием звонков 24/7</Typography>
              <Typography variant="h6" mt="10px">
                +996 (312) 46 85 15
              </Typography>
              <Typography variant="h6">+996 (552) 30 32 06</Typography>
            </Grid>
          </Grid>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7891933950223!2d74.58995091546709!3d42.87729341027228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec98281e85c63%3A0x305e5b2a69cb4fcb!2sMakers%20Studio!5e0!3m2!1sru!2skg!4v1649415754983!5m2!1sru!2skg"
            width="100%"
            height="400"
            style={{ border: "0px", margin: "20px 0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
      </Box>
    </>
  );
};

export default Header;
