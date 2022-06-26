import React from "react";
import Loader from "./LOADER";
import MainCard from "./MAIN_CARD";

export default class UserRated extends React.Component {
  state = {
    $product: [],
    account: 1,
    home: false,
  };
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
  }
  init(state) {
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?sort=rating&sort_direction=desc&limit=15"
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState(() => {
          return {
            $product: json.products,
            home: true,
            $numPageStart: json.page,
            $numPageStop: json.total_pages,
          };
        });
      });
    /*this.setState((state) => {
      do {
        this.init();
      } while (this.state.account !== 1);
    });*/
  }
  componentDidMount() {
    this.init();
  }

  render() {
    if (this.state.home === null) {
      return <Loader />;
    }
    return (
      <div className="container p-4">
        <h2 className="has-text-centered">
          <strong>Produits les mieux notés : </strong>
        </h2>
        <div className="p-5">
          <div key={product.id} className="columns main-scroll">
            {this.state.$product.map((product) => {
              return (
                <div className="column is-one-third">
                  <MainCard data={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
