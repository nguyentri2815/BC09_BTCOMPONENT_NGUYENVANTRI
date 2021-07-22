import React, { Component } from "react";
import PromotopnItem from "./PromotopnItem";

export default class Promotopn extends Component {
  render() {
      const listlabels=[
          {
              img:"./img/promotion_1.png",
              id:1
          },
          {
              img:"./img/promotion_2.png",
              id:2
          },
          {
              img:"./img/promotion_3.jpg",
              id:3
          },
      ]
    return (
      <>
        <section id="promotion" className="container-fluid pt-5 pb-5">
          <h1 className="text-center text-white">PROMOTION</h1>
          <div className="container bg-light pt-5 pb-5">
            <div className="row">
                {listlabels.map((item)=>(
                    <PromotopnItem key={item.id} item={item}/>
                ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
