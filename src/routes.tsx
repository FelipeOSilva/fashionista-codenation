import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import { useDispatch } from "react-redux";
import { setProductStorage } from "./services/api";
import { setProducts } from "./store/actions";
const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setProductStorage()
      .then((products) => {
        dispatch(setProducts(products));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setProducts([]));
      });
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={DetailProduct} path="/product/:id" />
    </BrowserRouter>
  );
};

export default Routes;
