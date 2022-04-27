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

import { useProductContext } from "../Contexts/MoviesContextProvider";
import MySkeleton from "../Components/Skeleton/MySkeleton";
import AddCom from "../Components/Comments/AddCom";
import ListCom from "../Components/Comments/ListCom";
// import Recommendations from "../Components/Recommendations/Recommendations";

import { useAuth } from "../Contexts/AuthContextProvider";
import { useCart } from "../Contexts/CartContextProvider";
import { notify } from "../Components/Tostify/Toastify";
import AddRating from "../Components/Rating/AddRating";

const ProdDetail = () => {
  const { prodId } = useParams();
  const {
    getOneProduct,
    oneProd,
    getProducts,
    products,
    saveEditedProd,
    saveEdit,
  } = useProductContext();

  const { cart, addDelToCart, isProdInCart } = useCart();
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
    <>
      <Box>
        {oneProd ? (
          <>
            <img width="100%" src={oneProd.img2} alt="" />
            <Container>
              <Typography
                variant="h2"
                align="center"
                m="20px 0"
                style={{
                  fontFamily: "'Ms Madi', cursive",
                }}
              >
                Walt Disney Pictures Presents
              </Typography>
              <Grid container spacing={2} m="20px 0" sx={{ display: "flex" }}>
                <Grid xs={12} md={6}>
                  <img width="80%" src={oneProd.img} alt="" />
                </Grid>
                <Grid xs={12} md={6}>
                  <Typography variant="h4">{oneProd.title}</Typography>
                  <Typography variant="body2" m="10px 0">
                    {oneProd.data}
                  </Typography>
                  <Typography variant="body1" m="15px 0">
                    {oneProd.description}
                  </Typography>
                  <Typography variant="h5">Producer</Typography>
                  <Typography variant="body1">{oneProd.producer}</Typography>
                  <Typography variant="h5" m="20px 0 0 0">
                    Cast
                  </Typography>
                  <Typography variant="body1">{oneProd.cast}</Typography>
                  <Typography variant="h5" m="20px 0 0 0">
                    Price
                  </Typography>
                  <Typography> ${oneProd.price}</Typography>
                  <Typography variant="h5" m="20px 0 0 0">
                    View
                  </Typography>
                  <p style={{ margin: "0", padding: "0" }}>{oneProd.count}</p>
                  <Typography variant="h5" m="20px 0 0 0">
                    Special offer
                  </Typography>
                  <Typography>
                    <Typography>
                      With the purchase of the movie, Disney will provide you
                      and your family with tickets to Disneyland. As well as
                      free viewing of all films on our website.
                    </Typography>
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ margin: "10px 0", fontWeight: "bold" }}
                      size="large"
                    >
                      <a style={{ textDecoration: "none" }} href={oneProd.film}>
                        Watch online
                      </a>
                    </Button>
                  </Typography>
                  {/* <Typography variant="h5" m="20px 0 0 0">
                    View
                  </Typography>
                  <p style={{ margin: "0", padding: "0" }}>{oneProd.count}</p> */}
                </Grid>
              </Grid>
            </Container>

            {/* Trailer */}
            <Container>
              <Typography variant="h4">Trailer</Typography>
              <video
                width="100%"
                src={oneProd.trailer}
                controls="controls"
                poster={oneProd.img2}
              ></video>
              <Button
                component={Link}
                variant="outlined"
                color="inherit"
                to="/movies"
                sx={{ margin: "10px", fontWeight: "bold" }}
                size="large"
              >
                Back
              </Button>
            </Container>

            {/* Recom */}
            <Container>
              <Typography variant="h4" m="20px 0">
                Recommendation
              </Typography>
            </Container>
            <div className="recom">
              {rec && rec.length > 0
                ? rec.map((product) => (
                    <Card
                      sx={{
                        maxWidth: 235,
                        marginRight: "5px",
                        marginBottom: "10px",
                      }}
                      key={product.id}
                      onClick={() => navigate("/movies")}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          // height="140"
                          image={product.img}
                          alt={product.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  ))
                : " "}
            </div>
          </>
        ) : (
          <MySkeleton />
        )}
      </Box>
      <Box>
        <ListCom />
        <AddCom />
      </Box>
    </>
  );
};

export default ProdDetail;
