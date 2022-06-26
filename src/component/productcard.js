import { Component } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Product from "./product";

export default class Productcard extends React.Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    let products = this.props.products;
    return (
      <div className="card m-6 carte card-min-width">
        <div className="card-image p-6 is-128x128">
          <figure className="image">
            <img src={this.props.data.images.photos} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.data.title}</p>
            </div>
          </div>

          <div className="content">
            <p>Description : </p>
            <p className="">Prix : {this.props.data.price} </p>
            <Link to={"product/" + this.props.data.id}>
              <button className="button is-info p-5">Plus d'information</button>
            </Link>
            <button
              className="button is-info p-5 mt-3"
              onClick={() => {
                console.log(this.props);
                //this.props.addToCart(this.state.products);
              }}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    );
  }
}
