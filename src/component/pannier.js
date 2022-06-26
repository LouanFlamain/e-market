import React from "react";
import PannierCard from "./pannierCrad";
export default class Pannier extends React.Component {
  state = {
    totalPrice: "",
    count: 1,
  };
  constructor(props) {
    super(props);
    this.getTotalPrice = this.getTotalPrice.bind(this);
    this.local = this.local.bind(this);
  }
  getTotalPrice() {
    let sum = 0;
    this.props.cart.map((product) => {
      sum += parseFloat(product.price);
    });
    console.log(this.props.cart);

    sum = Math.round(sum * 100) / 100;
    return sum.toFixed(2);
  }

  local() {
    localStorage.setItem("Product", JSON.stringify(this.props.cart));
    let toto = JSON.parse(localStorage.getItem("Product"));
  }

  render() {
    return (
      <>
        <div className="content">
          <p>{this.getTotalPrice()} &euro;</p>
        </div>

        <div className="imgs">
          {this.props.cart.map((product, index) => {
            return (
              <PannierCard
                key={index}
                addToCart={this.props.addToCart}
                deleteFromCart={this.props.deleteFromCart}
                cart={this.props.local}
                product={this.props.product}
              />
            );
          })}
        </div>
      </>
    );
  }
}
