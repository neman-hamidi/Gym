import React from "react";
import Navsite from "../Navsite/Navsite";
import Header from "../Header/Header";
import Underheader from "../Underheader/Underheader";
import Plan from "../Plan/Plan";
import Coach from "../Coach/Coach";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";

export default function Index() {
  return (
    <>
      <Navsite />
      <Header />
      <Underheader/>
      <Plan/>
      <Coach/>
      <Blog/>
      <Footer/>
    </>
  );
}
