import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={DetailProduct} path="/product" />
    </BrowserRouter>
  );
};

export default Routes;
