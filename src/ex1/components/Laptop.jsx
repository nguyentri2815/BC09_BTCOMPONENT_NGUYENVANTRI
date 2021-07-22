import React, { Component } from "react";
import LapTopItem from "./LapTopItem";

export default class Laptop extends Component {
  render() {
      const listLaptop=[
          {
              img:"./img/lt_macbook.png",
              title:"MACBOOK"
          },
          {
              img:"./img/lt_rog.png",
              title:"ASUS ROG"
          },
          {
              img:"./img/lt_hp.png",
              title:"HP OMEN"
          },
          {
              img:"./img/lt_lenovo.png",
              title:"LENOVO THINKPAD"
          }
      ]
    return (
      <>
        <section
          id="laptop"
          className="container-fluid pt-5 pb-5 bg-light text-dark"
        >
          <h1 className="text-center">BEST LAPTOP</h1>
          <div className="row">
            {
                listLaptop.map(item=>(
                    <LapTopItem key={item.title} item={item}/>
                ))
            }
          </div>
        </section>
      </>
    );
  }
}
