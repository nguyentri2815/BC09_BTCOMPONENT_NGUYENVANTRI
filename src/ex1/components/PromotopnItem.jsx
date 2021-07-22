import React, { Component } from "react";

export default class PromotopnItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <>
        <div className="col-xs-12 col-sm-12 col-md-4">
          <div className="container">
            <img src={item.img} alt="" style={{ maxWidth: "100%" }} />
          </div>
        </div>
      </>
    );
  }
}
