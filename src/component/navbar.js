import { Link } from "react-router-dom";
import Home from "../page/Accueil";

export default function Header() {
  return (
    <nav
      class="navbar has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <Link class="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </Link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link to="/" class="navbar-item">
            Accueil
          </Link>

          <Link to="/panier" class="navbar-item">
            Panier
          </Link>

          {/*<div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">More</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">About</a>
              <a class="navbar-item">Jobs</a>
              <a class="navbar-item">Contact</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
  </div>*/}
        </div>
      </div>
      <form className="is-flex mt-4">
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="search"
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
