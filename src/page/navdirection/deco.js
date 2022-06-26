import React from "react";
import Productcard from "../../component/productcard";
import Page404 from "../404";
import Loader from "../../component/LOADER";
import Search from "../SEARCH";

export default class Deco extends React.Component {
  state = {
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

    this.handleSearch = this.handleSearch.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage(state) {
    if (this.state.$page == this.state.$numPageStop) {
      return;
    } else {
      this.state.$page = this.state.$page + 1;
    }
    this.componentDidUpdate(this.handleSearch());
  }
  prevPage(state) {
    if (this.state.$page === 1) {
      return;
    } else {
      this.state.$page = this.state.$page - 1;
    }
    this.componentDidUpdate(this.handleSearch());
  }

  handleSearch() {
    this.setState(() => {
      return {
        home: null,
      };
    });

    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?category=deco&limit=12&page=" +
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
            $product: json.products,
            home: true,
            onPage: true,
            onSearch: true,
            empty: false,
            $numPageStart: json.page,
            $numPageStop: json.total_pages,
          };
        });
      });
    console.log(this.state.notFound);
  }
  componentDidMount() {
    this.handleSearch();
  }

  render() {
    if (this.state.notFound === true || this.state.notSearch === true) {
      return <Page404 />;
    }
    if (this.state.notSearch === true) {
      return <Page404 />;
    }
    if (this.state.home == null) {
      return <Loader />;
    }

    if (this.state.onPage === true) {
      return (
        <div className="section">
          <p className="has-text-centered">
            <strong>Décoration :</strong>
          </p>
          <div className="container">
            <div className="columns is-multiline">
              {this.state.$product.map((product) => {
                return (
                  <div key={product.id} className="column is-one-third">
                    <Productcard data={product} />
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
}
