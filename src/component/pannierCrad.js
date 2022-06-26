import React from "react";
export default class PannierCard extends React.Component {
  state = {
    count: 1,
    price: this.props.product.price,
  };
  constructor(props) {
    super(props);
  }
  getTotalPrice() {
    let sum = 0;
    this.props.cart.forEach((product) => {
      sum += parseFloat(product.price);
    });

    sum = Math.round(sum * 100) / 100;
    return sum.toFixed(2);
  }
  render() {
    return (
      <div className="img">
        <figure className="image is-3by2">
          <img
            src={this.props.product.images.photos[0]}
            style={{ objectFit: "cover" }}
          />
        </figure>

        <div className="content">
          <p>{this.props.product.title}</p>
          <h2>{this.state.price} </h2>
        </div>
        <div className="btn">
          <button
            className="btnplus"
            type="button"
            onClick={() => {
              this.props.addToCart(this.props.product);
              this.setState((state) => {
                return {
                  count: state.count + 1,
                };
              });
            }}
          >
            +
          </button>
          <h1>{this.state.count}</h1>
          <button
            className="btnmoins"
            type="button"
            onClick={() => {
              this.props.deleteFromCart(this.props.product);
              this.setState((state) => {
                return {
                  count: state.count - 1,
                };
              });
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}
