import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

import { useCart } from "../../../Contexts/CartContextProvider";

import { useFavorite } from "../../../Contexts/FavoriteContextProvider";
import { notify } from "../../Tostify/Toastify";
import { useLikeContext } from "../../../Contexts/LikeContextProvider";
import { useAuth } from "../../../Contexts/AuthContextProvider";

export default function OneProduct({ item }) {
  const { addDelToCart, isProdInCart } = useCart();
  const { addDelToFav, isProdInFav } = useFavorite();
  const [inCart, setInCart] = useState(isProdInCart(item.id));
  const [inFav, setInFav] = useState(isProdInFav(item.id));
  const { currentUser } = useAuth();

  const { addLike, delLike, getLike, likes, allLikes } = useLikeContext();
  const isLikedF = () =>
    likes.some((like) => {
      return like.prodId === item.id;
    });
  const [disabled, setDisabled] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(isLikedF());

  React.useEffect(() => {
    getLike();
  }, []);
  React.useEffect(() => {
    setIsLiked(isLikedF());
  }, [likes]);

  const handleSubmitLike = () => {
    let forDelId = likes.find((prod) => prod.prodId === item.id);
    // console.log(forDelId);
    let obj = {
      user: currentUser.user,
      prodId: item.id,
    };
    // console.log(obj);
    let checkProdIsLiked = likes.some((elem) => {
      return obj.prodId === elem.prodId;
    });
    if (checkProdIsLiked && forDelId) {
      delLike(forDelId.id);
    } else {
      addLike(obj);
    }
  };
  let oneProdLikes = allLikes.filter((elem) => {
    return elem.prodId === item.id;
  });

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: 360 }} className="one-card">
        <Button
          sx={{ display: "flex", flexDirection: "column" }}
          component={Link}
          to={`detail/${item.id}`}
        >
          <CardMedia
            component="img"
            // height="240"
            image={item.img}
            alt={item.title}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              color="black"
              align="left"
              sx={{ textAlign: "center" }}
            >
              {item.title}
            </Typography>
            <Typography variant="h6" color="green">
              ${item.price}
            </Typography>
            {/* <Typography variant="body1">Type: {item.type}</Typography> */}
          </CardContent>
        </Button>
        <CardActions>
          {currentUser.user === null ? (
            <IconButton
              onClick={() => {
                notify(
                  "error",
                  "Dear Customer, please sign IN/UP to purchase."
                );
              }}
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                addDelToCart(item);
                setInCart(isProdInCart(item.id));
              }}
              color={inCart ? "warning" : "inherit"}
            >
              <ShoppingCartIcon />
            </IconButton>
          )}

          {currentUser.user === null ? (
            <IconButton
              onClick={() => {
                notify(
                  "error",
                  "Dear Customer, please sign IN/UP to save favorites."
                );
              }}
              color="inherit"
            >
              <BookmarkAddIcon />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              onClick={() => {
                addDelToFav(item);
                setInFav(isProdInFav(item.id));
              }}
            >
              {inFav ? <BookmarkRemoveIcon /> : <BookmarkAddIcon />}
            </IconButton>
          )}
          <IconButton
            color="inherit"
            onClick={() => {
              setDisabled(true);
              handleSubmitLike();
            }}
          >
            {isLiked ? (
              <FavoriteIcon color="warning" />
            ) : (
              <FavoriteBorderIcon />
            )}
            {oneProdLikes.length}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
