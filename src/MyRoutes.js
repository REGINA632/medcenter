import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import More from "./Pages/More";
import Movies from "./Pages/Movies";
import Shop from "./Pages/Shop";
import Error from "./Pages/Error";
import List from "./Components/Admin/List/List";
import Add from "./Components/Admin/Add/Add";
import Edit from "./Components/Admin/Edit/Edit";
import Favorite from "./Pages/Favorite";
import PaymentForm from "./Pages/Payment";
import ProdDetail from "./Pages/ProdDetail";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import RequireAuth from "./Components/Auth/RequireAuth";
import ResetPass from "./Pages/ResetPass";
import Cart from "./Pages/Cart";
import Chat1 from "./Pages/Chat";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/more" element={<More />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/movies/detail/:prodId" element={<ProdDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route path="/chat" element={<Chat1 />} />
        <Route path="*" element={<Error />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        >
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
