import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Movies from "./Pages/Movies";
import Error from "./Pages/Error";
import List from "./Components/Admin/List/List";
import Add from "./Components/Admin/Add/Add";
import Edit from "./Components/Admin/Edit/Edit";
import ProdDetail from "./Pages/ProdDetail";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import RequireAuth from "./Components/Auth/RequireAuth";
import ResetPass from "./Pages/ResetPass";
import AD from "./Pages/Services/AD";
import AKSH from "./Pages/Services/AKSH";
import ECG from "./Pages/Services/ECG";
import KAG from "./Pages/Services/KAG";
import VEM from "./Pages/Services/VEM";
import Echocg from "./Pages/Services/Echocg";
import Kardiolog from "./Pages/Services/Kardiolog";
import KardioStim from "./Pages/Services/KardioStim";
import Specialists from "./Pages/Specialists";
import Otdelenie from "./Pages/Otdelenie";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Price from "./Pages/Price";
import Reseption from "./Pages/Reseption";
import Anamnesis from "./Pages/Anamnesis";
import Uslugi from "./Pages/Uslugi";
import Kontact from "./Pages/Kontact";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/detail/:prodId" element={<ProdDetail />} /> */}
        <Route path="/admin/detail/:prodId" element={<ProdDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route path="*" element={<Error />} />
        <Route path="/ad" element={<AD />} />
        <Route path="/aksh" element={<AKSH />} />
        <Route path="/ecg" element={<ECG />} />
        <Route path="/echocg" element={<Echocg />} />
        <Route path="/kag" element={<KAG />} />
        <Route path="/kardiolog" element={<Kardiolog />} />
        <Route path="/kardioStim" element={<KardioStim />} />
        <Route path="/vem" element={<VEM />} />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/otdelenie" element={<Otdelenie />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/reseption" element={<Reseption />} />
        <Route path="/uslugi" element={<Uslugi />} />
        <Route path="/special" element={<Specialists />} />
        <Route path="/kontact" element={<Kontact />} />
        <Route path="/add" element={<Add />} />
        <Route path="/admin/detail/:prodId/anamnesis" element={<Anamnesis />} />
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
          {/* <Route path="detail/:prodId" element={<ProdDetail />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRoutes;
