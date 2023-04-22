import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../Loader/Loader";
const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact="true" path="/" element={<Home />}></Route>
        <Route exact="true" path="/About" element={<About />}></Route>
        <Route exact="true" path="/Skills" element={<Skills />}></Route>
        <Route exact="true" path="/Contact" element={<Contact />}></Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
};

export default Main;
