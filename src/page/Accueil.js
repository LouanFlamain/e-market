import React from "react";
import Productcard from "../component/productcard";
import Page404 from "./404";
import Loader from "../component/LOADER";
import Search from "./SEARCH";

export default class Home extends React.Component {
  render() {
    return <Search />;
  }
  /*  state = {
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

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  thetest(props) {
    /*this.setState((props) => {
      return {
        $search: this.props.searching,
      };
    });
    console.log(this.props.searching);
  }

  nextPage(state) {
    this.setState((state) => {
      return {
        $page: this.state.$page + 1,
      };
    });
    this.handleSearch(state);
    console.log(this.state.$page);
  }
  prevPage(state) {
    this.setState((state) => {
      if (this.state.$page === 1) {
        return {
          $page: this.state.$page,
        };
      } else {
        return {
          $page: this.state.$page - 1,
        };
      }
    });
    this.handleSearch(state);
    console.log(this.state.$page);
  }
  handleInput(event) {
    this.setState(() => {
      return {
        $search: event.target.value,
      };
    });
  }

  handleSearch(event) {
    this.setState(() => {
      return {
        home: null,
      };
    });
    event.preventDefault();

    fetch(
      "https://otakod.es/hetic/ecommerce-api/products?search=" +
   this.props.searching +
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
            home: true,
            onPage: true,
            onSearch: true,
            empty: false,
          };
        });
      });
    console.log(this.state.notFound);
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
    if (this.state.empty === true) {
      return (
        <div className="section">
          <form onSubmit={this.handleSearch}>
            <div className="field">
              <label className="label"> Chercher dans l'API</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="search"
                  onChange={this.handleInput}
                  required
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Rechercher</button>
              </div>
            </div>
          </form>
          <Search />
        </div>
      );
    }
    if (
      this.state.onPage === false ||
      (this.state.onPage === false &&
        (this.state.notSearch === true || this.state.notFound === true))
    ) {
      return (
        <div className="section">
          <form onSubmit={this.handleSearch}>
            <div className="field">
              <label className="label"> Chercher dans l'API</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="search"
                  onChange={this.handleInput}
                  required
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Rechercher</button>
              </div>
            </div>
          </form>
          <div className="container">
            <div className="columns is-multiline">
              {this.state.$product.map((product) => {
                return (
                  <div className="column is-one-third">
                    <Productcard data={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
    if (this.state.onPage === true) {
      return (
        <div className="section">
          <form onSubmit={this.handleSearch}>
            <div className="field">
              <label className="label"> Chercher dans l'API</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="search"
                  onChange={this.handleInput}
                  required
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Rechercher</button>
              </div>
            </div>
          </form>
          <div className="container">
            <div className="columns is-multiline">
              {this.state.$product.map((product) => {
                return (
                  <div className="column is-one-third">
                    <Productcard data={product} />
                  </div>
                );
              })}
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
  } */
}
