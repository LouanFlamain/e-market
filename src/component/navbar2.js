import React from "react";
import { Link } from "react-router-dom";
import Home from "../page/Accueil";
import logo from "../img/logo.svg";

export default class Header extends React.Component {
  state = {
    search: "",
    turn: false,
  };
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.modificateTurn = this.modificateTurn.bind(this);
  }

  handleInput(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }
  handleSearch(event) {
    this.setState(() => {
      return {
        search: "",
      };
    });
    event.preventDefault();
    //window.location.replace("/search");
    this.props.func(this.state.search);
    this.props.history.push("/search");
  }
  modificateTurn() {
    if (this.state.turn === false) {
      this.setState(() => {
        return {
          turn: true,
        };
      });
    } else {
      this.setState(() => {
        return {
          turn: false,
        };
      });
    }
  }
  render() {
    if (this.state.turn == false) {
      return (
        <nav
          className="navbar has-shadow"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand logo-border m-2 has-shadow">
            <Link className="navbar-item image-shadow" to="/">
              <img src={logo} className="mr-2" />
              <p>e-market</p>
            </Link>

            <a
              onClick={this.modificateTurn}
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Accueil
              </Link>

              <Link to="/pannier" className="navbar-item">
                Panier
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <Link to="/discount" className="navbar-item">
                    Prix Réduits
                  </Link>
                  <Link to="/stock" className="navbar-item">
                    En stock
                  </Link>
                  <Link to="/rated" className="navbar-item">
                    Les mieux notés
                  </Link>
                  <hr className="navbar-divider" />
                  <p className="navbar-item">
                    <strong>Catégories : </strong>
                  </p>
                  <Link to="/figurine" className="navbar-item">
                    Figurines
                  </Link>
                  <Link to="/vetement" className="navbar-item">
                    Vêtements
                  </Link>
                  <Link to="/decoration" className="navbar-item">
                    Décoration
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={this.handleSearch} className="is-flex mt-4">
            <div className="field">
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

            <div className="control ml-4 mr-4">
              <button className="button is-link">Rechercher</button>
            </div>
          </form>
        </nav>
      );
    } else {
      return (
        <nav
          className="navbar has-shadow"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </Link>

            <a
              onClick={this.modificateTurn}
              role="button"
              className="navbar-burger is-active"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu is-active">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Accueil
              </Link>

              <Link to="/pannier" className="navbar-item">
                Panier
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <Link to="/discount" className="navbar-item">
                    Prix Réduits
                  </Link>
                  <Link to="/stock" className="navbar-item">
                    En stock
                  </Link>
                  <Link to="/rated" className="navbar-item">
                    Les mieux notés
                  </Link>
                  <hr className="navbar-divider" />
                  <p className="navbar-item">
                    <strong>Catégories : </strong>
                  </p>
                  <Link to="/figurine" className="navbar-item">
                    Figurines
                  </Link>
                  <Link to="/vetement" className="navbar-item">
                    Vêtements
                  </Link>
                  <Link to="/decoration" className="navbar-item">
                    Décoration
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={this.handleSearch} className="is-flex mt-4">
            <div className="field">
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

            <div className="control ml-4 mr-4">
              <button className="button is-link">Rechercher</button>
            </div>
          </form>
        </nav>
      );
    }
  }
}
