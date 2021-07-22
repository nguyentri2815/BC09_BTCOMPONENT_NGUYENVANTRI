import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    const listiitems = [
      {
        id: 1,
        img: "https://picsum.photos/1349/315/?image=973",
      },
      {
        id: 2,
        img: "https://picsum.photos/1349/315/?image=973",
      },
      {
        id: 3,
        img: "https://picsum.photos/1349/315/?image=973",
      },
    ];
    const renderList = (item) => (
      <div className={item.id === 1 ? "carousel-item active" : "carousel-item"}>
        <img className="d-block w-100" src={item.img} alt="First slide" />
      </div>
    );
    return (
      <>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            {listiitems.map((item) => renderList(item))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
}
