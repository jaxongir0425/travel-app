import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
