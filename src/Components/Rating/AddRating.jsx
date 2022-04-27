import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  TextField,
} from "@mui/material";
import { useAuth } from "../../Contexts/AuthContextProvider";
import SendIcon from "@mui/icons-material/Send";
import { notify, notifyError } from "../Tostify/Toastify";
import { useRatContext } from "../../Contexts/RatingContextProvider";
import StarIcon from "@mui/icons-material/Star";
import "./AddRating.css";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const AddRating = () => {
  const { addRat, getRat } = useRatContext();
  const { currentUser } = useAuth();
  const { prodId } = useParams();

  const [values, setValues] = useState({
    author: "",
    rating: "",
    prodId: +prodId,
  });

  useEffect(() => {
    setValues({ ...values, author: currentUser.user });
  }, [currentUser]);

  const handleChange = (e) => {
    console.log(e);
    let newRat = {
      ...values,
      [e.target.name]: e.target.value,
    };
    setValues(newRat);
  };

  function handleClick() {
    if (!values.rating) {
      notify("error", "You can not send empty blank!");
    } else {
      addRat(values);
      setValues({ rating: "", author: currentUser.user, prodId: +prodId });
      getRat(prodId);
    }
  }

  const value = 3.5;

  return (
    <div>
      <Box
        sx={{
          width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="text-feedback"
          value={value.rating}
          onChange={(e) => handleChange(e)}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      </Box>
      {/* рейтинг */}

      {/* <div className="rating">
        <div className="rating__body">
          <div className="rating__active"></div>
          <div className="rating__items">
            <input
              type="radio"
              className="rating__item"
              value="1"
              name="rating"
              id=""
            />
            <input
              type="radio"
              className="rating__item"
              value="2"
              name="rating"
              id=""
            />
            <input
              type="radio"
              className="rating__item"
              value="3"
              name="rating"
              id=""
            />
            <input
              type="radio"
              className="rating__item"
              value="4"
              name="rating"
              id=""
            />
            <input
              type="radio"
              className="rating__item"
              value="5"
              name="rating"
              id=""
            />
          </div>
        </div>
        <div className="rating__value">3.6</div>
      </div> */}

      {/* рейтинг */}
    </div>
  );
};

export default AddRating;
