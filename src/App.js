import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/navbar";
import Home from "./page/Accueil";
import Page404 from "./page/404";
import Product from "./component/product";
import Search from "./page/SEARCH";
import Pannier from "./component/pannier";
import Productcard from "./component/productcard";

class App extends React.Component {
  state = {
    products: "",
    cart: [],
    tab: [],
    local: 0,
  };
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  componentDidMount(product) {
    this.addToCart(product);
  }

  pageChanges(page) {
    this.setState(() => {
      return {
        activepage: page,
      };
    });
  }
  componentDidMount() {
    return fetch(
      `https://otakod.es/hetic/ecommerce-api/products?search=goku&limit=5&page=5`
    )
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        console.log(products.products);
        this.setState({
          products: products.products,
        });
      });
  }
  deleteFromCart(product) {
    let tab = this.state.tab;
    tab.shift(product);
    this.setState(() => {
      // nouvelle technique

      return {
        cart: tab,
        local: tab,
      };
    });

    localStorage.setItem("Product", JSON.stringify(this.state.local));
    let toto = JSON.parse(localStorage.getItem("Product"));
    console.log(toto);
  }
  addToCart(product) {
    let tab = [];
    console.log(tab);

    tab.push(product);

    if (JSON.parse(localStorage.getItem("Product : ")) !== null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));
      New_data.push(product);
      localStorage.setItem("Product : ", JSON.stringify(New_data));
      this.setState(() => {
        return {
          cart: New_data,
          local: New_data,
        };
      });
      console.log(New_data);
    }

    if (JSON.parse(localStorage.getItem("Product : ")) === null) {
      let New_data = JSON.parse(localStorage.getItem("Product : "));
      localStorage.setItem("Product : ", JSON.stringify(tab));

      this.setState(() => {
        return {
          cart: New_data,
          local: New_data,
        };
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/product/:id" component={Product} />
          <Route path="/pannier">
            <Pannier
              cart={this.state.cart}
              addToCart={this.addToCart}
              deleteFromCart={this.deleteFromCart}
              local={this.state.local}
              product={this.state.products}
            />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    );
  }
}
