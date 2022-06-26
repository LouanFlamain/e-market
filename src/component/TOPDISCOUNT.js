import React from "react";
import Loader from "./LOADER";
import Productcard from "./productcard";

export default class Mainpage extends React.Component {
  state = {
    $product: [],
    account: 1,
    home: false,
  };
  constructor(props) {
    super(props);
  }

  init(state) {
    fetch("https://otakod.es/hetic/ecommerce-api/products?&random=1&limit=60")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState(() => {
          return {
            $product: json.products,
            home: true,
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
          <strong>Explorez notre catalogue : </strong>
        </h2>
        <div className="p-5">
          <div className="columns is-multiline">
            {this.state.$product.map((product) => {
              return (
                <div key={product.id} className="column is-one-third">
                  <Productcard data={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
