import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import SmartPhone from "./components/SmartPhone";
import Laptop from "./components/Laptop";
import Promotopn from "./components/Promotopn";

export default class HomeEx1 extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar/>
          <Carousel/>
          <SmartPhone/>
          <Laptop/>
          <Promotopn/>
        </div>
      </>
    );
  }
}
