import React, { createContext, useContext, useReducer } from "react";

import { CART } from "../Helpers/consts";
import { calcSubPrice, calcTotalPrice } from "../Helpers/functions";

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART_LENGTH:
      return {
        ...state,
        cartLength: action.payload,
      };
    case CART.GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  // Hook useReducer to control the state of cart
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //Checks LS , if it is empty sets empty array with key products
  function createCartFromLS() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
  }
  //add and delete product to/from cart (icon color)
  const addDelToCart = (prod) => {
    let cart = createCartFromLS();
    let newProd = {
      item: prod,
      count: 1,
      subPrice: prod.price,
    };

    let checkProdInCart = cart.products.some((obj) => {
      return obj.item.id === prod.id;
    });
    if (checkProdInCart) {
      cart.products = cart.products.filter((obj) => {
        return obj.item.id !== prod.id;
      });
    } else {
      cart.products.push(newProd);
    }

    // Total price of products in cart
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCartLength();
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  //get  quantity of products in cart
  const getCartLength = () => {
    let cart = createCartFromLS();
    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: cart.products.length,
    });
  };

  //Checks if product is in cart
  const isProdInCart = (id) => {
    let cart = createCartFromLS();
    let exist = cart.products.some((obj) => {
      return obj.item.id === id;
    });
    return exist;
  };

  // render of Cart
  const getCart = () => {
    let cart = createCartFromLS();
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  //+count- for one product
  const changeProductCount = (newCount, id) => {
    let cart = createCartFromLS();
    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = newCount;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  // Deletes product from cart .
  const deleteProdInCart = (id) => {
    let cart = createCartFromLS();
    cart.products = cart.products.filter((elem) => {
      return elem.item.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    getCartLength();
  };

  return (
    <cartContext.Provider
      value={{
        cartLength: state.cartLength,
        cart: state.cart,
        getCartLength,
        addDelToCart,
        isProdInCart,
        getCart,
        changeProductCount,
        deleteProdInCart,
      }}
    >
      {" "}
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
