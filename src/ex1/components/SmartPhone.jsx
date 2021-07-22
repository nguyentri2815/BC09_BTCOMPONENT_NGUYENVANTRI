import React, { Component } from "react";
import SmartPhoneItem from "./SmartPhoneItem";

export default class SmartPhone extends Component {
  render() {
      const listSmartphones=[
          {
              img:"./img/sp_iphoneX.png",
              title:"iPhone X"
          },
          {
              img:"./img/sp_note7.png",
              title:"Galaxy Note7"
          },
          {
              img:"./img/sp_vivo850.png",
              title:"Vivo"
          },
          {
              img:"./img/sp_blackberry.png",
              title:"Blackberry"
          },
      ]
    return (
      <>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">
              {
                  listSmartphones.map(item=>(
                      <SmartPhoneItem key={item.title} item={item}/>
                  ))
              }
          </div>
        </section>
      </>
    );
  }
}
