import React, { createContext, useContext, useReducer } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import { notify, notifyError } from "../Components/Tostify/Toastify";
import { ACTIONS, API, PRODUCTS_LIMIT } from "../Helpers/consts";
export const moviesContext = createContext();

export const useProductContext = () => {
  return useContext(moviesContext);
};

const INIT_STATE = {
  products: [],
  oneProd: null,
  pageTotalCount: 1,
  comments: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
        pageTotalCount: Math.ceil(
          action.payload.headers["x-total-count"] / 1 / PRODUCTS_LIMIT
        ),
      };
    case ACTIONS.GET_ONE_PRODUCT:
      return { ...state, oneProd: action.payload };
    default:
      return state;
  }
}

const MoviesContextProvider = ({ children }) => {
  // Hook useReducer to control the state of product
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  //Render products from db.json
  const getProducts = async () => {
    try {
      let res = await axios.get(`${API}${window.location.search}`);
      dispatch({
        type: ACTIONS.GET_PRODUCTS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
  //Create new product
  const addProduct = async (newProduct) => {
    try {
      let res = await axios.post(API, newProduct);
      notify("success", `Product ${newProduct.title} successfully added!`);
      navigate("/admin");
    } catch (err) {
      notifyError(err);
    }
  };

  //Delete product
  const deleteProduct = async (prod) => {
    try {
      let res = await axios.delete(`${API}/${prod.id}`);
      notify("success", `Product ${prod.title} successfully deleted!`);
      getProducts();
    } catch (err) {
      notifyError(err);
    }
  };

  //Edit product

  //gets the product which should be edited
  const getOneProduct = async (id) => {
    try {
      let { data } = await axios(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (err) {
      notifyError(err);
    }
  };

  //saves edited product
  const saveEditedProd = async (editedProd) => {
    try {
      let res = await axios.patch(`${API}/${editedProd.id}`, editedProd);
      notify("info", `Product ${editedProd.title} succesfully updated`);
      getProducts();
      navigate("/admin");
    } catch (err) {
      notifyError(err);
    }
  };
  const saveEdit = async (editedProd) => {
    try {
      let res = await axios.patch(`${API}/${editedProd.id}`, editedProd);
      getProducts();
    } catch (err) {
      notifyError(err);
    }
  };

  return (
    <moviesContext.Provider
      value={{
        products: state.products,
        oneProd: state.oneProd,
        pageTotalCount: +state.pageTotalCount,
        getProducts,
        addProduct,
        deleteProduct,
        getOneProduct,
        saveEditedProd,
        saveEdit,
      }}
    >
      {children}
    </moviesContext.Provider>
  );
};

export default MoviesContextProvider;
