import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter , Route , Routes } from "react-router";
import { RecoilRoot } from "recoil";
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import {Home }from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
);
