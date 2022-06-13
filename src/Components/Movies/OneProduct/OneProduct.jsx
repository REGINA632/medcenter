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

import { notify } from "../../Tostify/Toastify";
import { useAuth } from "../../../Contexts/AuthContextProvider";

export default function OneProduct({ item }) {
  const { currentUser } = useAuth();

  return (
    <Grid item xs={12}>
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          p: "0",
          m: "0",
        }}
        component={Link}
        to={`detail/${item.id}`}
      >
        {item.имя} {item.фамилия}
        {/* <Typography variant="subtitle1">
          {item.имя} {item.фамилия}
        </Typography> */}
        {/* <Typography variant="h6">{item.фамилия}</Typography> */}
        {/* <Typography variant="body1">Type: {item.type}</Typography> */}
      </Button>
    </Grid>
  );
}
