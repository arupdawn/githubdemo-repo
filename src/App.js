import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Orders from "./Orders";
import Checkout from "./Checkout";
import OrderSuccess from "./OrderSuccess";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/ordersuccess">
            <Header/>
            <OrderSuccess/>
          </Route>

          <Route path="/productdetails">
            <Header/>
            <ProductDetails/>
          </Route>

          {/* Default route should be at the bottom -- below */}

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
