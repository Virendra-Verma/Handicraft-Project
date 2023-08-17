import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar2";
import Login from "./components/Login";

import AddProduct from "./components/AddProduct";
import Singup from "./components/Singup";
import ManageProducts from "./components/ManageProduct";
import ListProduct from "./components/ListProduct";
import { UserProvider } from "./UserContext";
import Find from "./components/Find";
import Header from "./components/Header";
import Wall from "./components/Wall";
import Living from "./components/Living";
import Style from "./components/Style";
import Still from "./components/Still";
import UserAuth from "./UserAuth";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Header/>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Wall />} path="Wall" />
            <Route element={<Login />} path="Login" />
            <Route element={<Singup />} path="signup" />
       
            <Route element={<Find />} path="Find" />
            <Route element={<Living />} path="Living" />
            <Route element={<Style />} path="Style" />
            <Route element={<Still />} path="Still" />
          
            <Route element={<UserAuth><AddProduct /></UserAuth>} path="Addproduct" />
            <Route element={<ManageProducts />} path="Manageproduct" />
            <Route element={<ListProduct />} path="browse" />
            <Route element={<Find />} path="browse/:category" />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
