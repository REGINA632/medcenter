import React, { createContext, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, firestore } from "../firebase";

import { ADMIN_EMAIL } from "../Helpers/consts";
import { notify } from "../Components/Tostify/Toastify.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Firestore } from "firebase/firestore";

const authContext = createContext();

export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    user: null,
    isAdmin: false,
    isLogged: false,
  });

  const navigate = useNavigate();

  // Создать пользователя
  const registerUser = async (email, password) => {
    try {
      let { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      let newUser = {
        user: user.email,
        isAdmin: user.email === ADMIN_EMAIL ? true : false,
        isLogged: true,
      };
      setCurrentUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      notify("success", "You are successfully registrated!");
      navigate("/");
    } catch (err) {
      console.log(err.code);
      console.log(err.message);

      switch (err.code) {
        case "auth/invalid-email":
          notify("error", "Inavlid email address!");
          break;
        case "auth/email-already-in-use":
          notify("error", "Email address is already in use!");
          break;
        case "auth/weak-password":
          notify("error", "Weak password!");
          break;
        default:
          notify("error", "Something went wrong! ");
      }
    }
  };

  //Login
  const loginUser = async (email, password) => {
    try {
      let { user } = await signInWithEmailAndPassword(auth, email, password);

      let newUser = {
        user: user.email,
        isAdmin: user.email === ADMIN_EMAIL ? true : false,
        isLogged: true,
      };
      setCurrentUser(newUser);
      localStorage.setItem("currentUser", JSON.stringify(newUser));
      notify("success", `Welcome 👐!`);
      navigate("/");
    } catch (err) {
      console.log(err.code);
      console.log(err.message);

      switch (err.code) {
        case "auth/invalid-email":
          notify("error", "Invalid email");
          break;
        case "auth/user-not-found":
          notify("error", "Email is incorrect");
          break;
        case "auth/wrong-password":
          notify("error", "Password is incorrect");
          break;
        default:
          notify("error", "Something went wrong");
      }
    }
  };

  //Получить текущего вошедшего пользователя
  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          user: user.email,
          isAdmin: user.email === ADMIN_EMAIL ? true : false,
          isLogged: true,
        });
      } else {
        console.log("no user from authListener");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  // LogOut
  const logOutUser = async () => {
    try {
      await signOut(auth);
      let noUser = {
        user: null,
        isAdmin: false,
        isLogged: false,
      };
      setCurrentUser(noUser);
      localStorage.setItem("currentUser", JSON.stringify(noUser));
      notify("warning", "Successfully logged out from account!");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //Отправить электронное письмо для сброса пароля
  const resetPass = async (email) => {
    try {
      let { user } = await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <authContext.Provider
      value={{ currentUser, registerUser, logOutUser, loginUser, resetPass }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
