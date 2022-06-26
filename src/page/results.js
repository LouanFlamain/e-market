import React from "react";
import Productcard from "../component/productcard";
import Page404 from "./404";
import Loader from "../component/LOADER";
import Search from "./SEARCH";

export default class Results extends React.Component {
  state = {
    $search: "",
    $product: [],
    $page: 1,
    notFound: false,
    notSearch: false,
    home: false,
    onPage: false,
    onSearch: false,
    empty: true,
  };

  constructor(props) {
    super(props);

    const me = this.props;

    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.Recherche = this.Recherche.bind(this);
  }

  thetest(props) {
    console.log(this.props.searching);
  }

  nextPage(state) {
    if (this.state.$page == this.state.$numPageStop) {
      return;
    } else {
      this.state.$page = this.state.$page + 1;
    }
    this.componentDidUpdate(this.Recherche());
  }
  prevPage(state) {
    if (this.state.$page === 1) {
      return;
    } else {
      this.state.$page = this.state.$page - 1;
    }
    this.componentDidUpdate(this.Recherche());
  }
  Recherche() {
    this.setState(() => {
      return {
        home: null,
      };
    });

    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?search=" +
        /*this.state.$search*/ this.props.searching +
        "&limit=12&page=" +
        this.state.$page
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
        if (json.total_products === 0) {
          this.setState(() => {
            return {
              notSearch: true,
            };
          });
        }
        //$btn.classList.remove("is-hidden");
        this.setState((state) => {
          return {
            $search: "",
            $product: json.products,
            $numPageStart: json.page,
            $numPageStop: json.total_pages,
            home: true,
            onPage: true,
            onSearch: true,
            empty: false,
            $thisProps: this.props.searching,
          };
        });
      });
    console.log(this.state.notFound);
  }
  componentDidMount() {
    this.Recherche();
    console.log("test");
  }
  componentDidUpdate(prevProps) {
    // only update chart if the data has changed
    console.log("1", prevProps, "2", this.props.searching);
    if (prevProps !== this.props.searching) {
    }
  }

  render() {
    if (this.state.notFound === true) {
      return <Page404 />;
    }
    if (this.state.notSearch === true) {
      return (
        <div className="section">
          <p className="notification is-info p-5">
            Aucun résultats pour cette recherche :(
          </p>
        </div>
      );
    }
    if (this.state.home == null) {
      return <Loader />;
    }
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.$product.map((product) => {
              return (
                <div key={product.id} className="column is-one-third">
                  <Productcard
                    data={product}
                    products={this.state.$product}
                    addToCart={this.props.addToCart}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <p className="has-text-centered">
              page : {this.state.$numPageStart} / {this.state.$numPageStop}
            </p>
          </div>
          <nav
            className="pagination "
            role="navigation"
            aria-label="pagination"
          >
            <button
              onClick={this.prevPage}
              className="button is-link pagination-previous"
            >
              Previous
            </button>

            <button
              onClick={this.nextPage}
              className="button is-link pagination-next"
            >
              Next page
            </button>
          </nav>
        </div>
      </div>
    );
  }
}
