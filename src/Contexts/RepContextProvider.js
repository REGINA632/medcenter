import React, { createContext, useContext, useReducer } from "react";

import axios from "axios";
import { ACTIONS, APIC, APIR } from "../Helpers/consts";
import { notifyError } from "../Components/Tostify/Toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./AuthContextProvider";

export const repContext = createContext();

export const useRepContext = () => {
  return useContext(repContext);
};

const INIT_STATE = {
  repeated: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_REP:
      return {
        ...state,
        repeated: action.payload.data,
      };
    default:
      return state;
  }
}

const RepContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const { prodId } = useParams();

  const getRep = async (id) => {
    try {
      let res = await axios.get(`${APIR}?prodId=${id}`);
      dispatch({
        type: ACTIONS.GET_REP,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const addRep = async (newRep) => {
    if (currentUser?.isLogged) {
      try {
        let res = await axios.post(APIR, newRep);
        getRep(newRep.prodId);
      } catch (err) {
        notifyError(err);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <repContext.Provider
      value={{
        repeated: state.repeated,
        getRep,
        addRep,
      }}
    >
      {" "}
      {children}
    </repContext.Provider>
  );
};

export default RepContextProvider;
