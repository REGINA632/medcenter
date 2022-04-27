import { getRatingUtilityClass } from "@mui/material";
import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { notifyError } from "../Components/Tostify/Toastify";
import { APIR, ACTIONS } from "../Helpers/consts";
import { useAuth } from "./AuthContextProvider";

export const ratContext = createContext();
export const useRatContext = () => {
  return useContext(ratContext);
};

const INIT_STATE = {
  rating: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_RAT:
      return {
        ...state,
        rating: action.payload.data,
      };
    default:
      return state;
  }
}
const RatingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { prodId } = useParams();

  const getRat = async (id) => {
    try {
      let res = await axios.get(`${APIR}?prodId=${id}`);
      dispatch({
        type: ACTIONS.GET_RAT,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addRat = async (newRat) => {
    if (currentUser?.isLogged) {
      try {
        let res = await axios.post(APIR, newRat);
        getRatingUtilityClass(newRat.prodId);
      } catch (err) {
        notifyError(err);
      }
    }
  };

  return (
    <ratContext.Provider value={{ rating: state.rating, getRat, addRat }}>
      {children}
    </ratContext.Provider>
  );
};

export default RatingContextProvider;
