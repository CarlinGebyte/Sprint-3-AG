import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import Cart from "../components/Cart";
import Description from "../components/Description";
import EditProduct from "../components/EditProduct";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Search from "../components/Search";
import Header from "../containers/Header";

export function DashboardRouter() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/add" element={<AddProduct></AddProduct>}></Route>
        <Route path="/edit" element={<EditProduct></EditProduct>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/description"
          element={<Description></Description>}
        ></Route>
        <Route path="/search/:search" element={<Search></Search>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
