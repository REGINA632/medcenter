import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Box,
  Grid,
  IconButton,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useProductContext } from "../../Contexts/MoviesContextProvider";
import { useAuth } from "../../Contexts/AuthContextProvider";
import MySkeleton from "../Skeleton/MySkeleton";

// import Recommendations from "../Components/Recommendations/Recommendations";

const Common = () => {
  const { prodId } = useParams();
  const {
    getOneProduct,
    oneProd,
    getProducts,
    products,
    saveEditedProd,
    saveEdit,
  } = useProductContext();

  // const [inCart, setInCart] = useState(isProdInCart(item.id));
  const { currentUser } = useAuth();

  const [rec, setRec] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(prodId);
  }, []);

  // histori
  const [viewed, setViewed] = useState(oneProd);

  useEffect(() => {
    if (viewed) {
      viewed.count++;
    }
  }, []);
  useEffect(() => {
    if (viewed) {
      saveEdit(viewed);
    }
  }, []);

  //Recomm
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    recomendation();
  }, [products]);

  async function recomendation() {
    let newArr = await products.filter((item) => {
      //console.log(item);
      return item.type === oneProd.type;
    });
    setRec(newArr);
  }
  return (
    <div>
      <Box>
        {oneProd ? (
          <>
            <Container maxWidth="xl">
              <Typography
                variant="h5"
                align="start"
                m="10px 0"
                sx={{ fontWeight: "bold" }}
              >
                Общие сведения о пациенте
              </Typography>
              <Grid container spacing={2} sx={{ display: "flex" }}>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">ФИО</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="subtitle1">
                    {oneProd.фамилия} {oneProd.имя} {oneProd.отчество}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">Дата Рождения</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="subtitle1">
                    {oneProd.дата_рождение}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">Паспортные данные</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="subtitle1">
                    {oneProd.номер_паспорта}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">ИНН</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="subtitle1">{oneProd.инн}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">Номер телефона</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="subtitle1">{oneProd.телефон}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">Лечащий врач</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="subtitle1">{oneProd.врач}</Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Typography variant="h6">Примечание</Typography>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="subtitle1">{oneProd.title}</Typography>
                </Grid>
              </Grid>
            </Container>
            {/* <Container maxWidth="xl">
              <Grid sx={{ display: "flex", textAlign: "center" }}>
                <Grid xs={12}>
                  <Typography variant="h5" align="center" m="20px 0">
                    Дополнительная информация
                  </Typography>
                  <ListInfo />
                  <AddCom />
                </Grid>
              </Grid>
            </Container> */}
          </>
        ) : (
          <MySkeleton />
        )}
      </Box>
    </div>
  );
};

export default Common;
