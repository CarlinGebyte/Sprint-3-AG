import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import Description from "../components/Description";
import EditProduct from "../components/EditProduct";
import Login from "../components/Login";
import Main from "../components/Main";
import Register from "../components/Register";
import Header from "../containers/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route path="/home" element={<Main></Main>}></Route>
        <Route path="/add" element={<AddProduct></AddProduct>}></Route>
        <Route path="/edit" element={<EditProduct></EditProduct>}></Route>
        <Route path="/description" element={<Description></Description>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
