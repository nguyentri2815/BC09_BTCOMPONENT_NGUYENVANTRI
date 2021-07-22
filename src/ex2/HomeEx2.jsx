import React, { Component } from "react";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default class HomeEx2 extends Component {
  render() {
    return (
      <>
        <div>
          <Header/>
          <Carousel/>
          <Content/>
          <Footer/>
        </div>
      </>
    );
  }
}
