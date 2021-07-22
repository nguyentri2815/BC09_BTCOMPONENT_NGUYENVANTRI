import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
      const listimgs=[
          {
              img:"./img/slide_1.jpg",
              id:1
          },
          {
              img:"./img/slide_2.jpg",
              id:2
          },
          {
              img:"./img/slide_3.jpg",
              id:3
          }
      ]
    const carauselitem=(item)=>(
        <div className={item.id===1?"carousel-item active":"carousel-item"}>
              <img
                src={item.img}
                alt="Los Angeles"
                width={1100}
                height={500}
              />
        </div>
    )
    return (
      <>
        <div id="demo" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
          </ul>
          {/* The slideshow */}
          <div className="carousel-inner">
              {
                  listimgs.map(item=>(
                    carauselitem(item)
                  ))
              }
          </div>
          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </>
    );
  }
}
