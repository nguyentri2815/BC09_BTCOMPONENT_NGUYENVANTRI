import React, { Component } from "react";

export default class SmartPhoneItem extends Component {
  render() {
      const {item}=this.props;
    return (
      <>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <div className="card bg-light" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src={item.img}
                alt="Card"
                style={{ maxWidth: "100%", height: "250px" }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-center">{item.title}</h4>
                <p className="card-text">
                  iPhone X features a new all-screen design. Face ID, which
                  makes your face your password
                </p>
                <a href="ble" className="btn btn-primary">
                  Detail
                </a>
                <a href="ble" className="btn btn-danger">
                  Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
