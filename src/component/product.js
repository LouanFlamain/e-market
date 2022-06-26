/*export default function Product(props) {
  console.log(props.params.mtach);
  return <p>anime</p>;
}*/

import React from "react";
import Page404 from "../page/404";
import DetailProductcard from "./detail_productcard";
import Loader from "./LOADER";

export default class Product extends React.Component {
  state = {
    product: null,
    notFound: false,
  };

  componentDidMount() {
    console.log(this.props.location);
    const search = new URLSearchParams(this.props.location.search);
    fetch(
      "https://otakod.es/hetic/ecommerce-api/products/" +
        this.props.match.params.id
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.status === 404) {
          this.setState(() => {
            return {
              notFound: true,
            };
          });
        }
        this.setState(() => {
          return {
            product: json,
          };
        });
      });
  }
  render() {
    if (this.state.notFound === true) {
      return <Page404 />;
    }
    if (this.state.product === null) {
      return <Loader />;
    }

    return <DetailProductcard data={this.state.product} />;
  }
}
