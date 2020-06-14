import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Store } from "../../types";
import { useSelector } from "react-redux";

const Header = () => {
  const [totalProductsCart, setTotalProductsCart] = useState(0);
  const { productsCart } = useSelector((state: Store) => state);

  useEffect(() => {
    let totalProducts = productsCart.reduce(
      (accumulator, product) => accumulator + product.qtdCart,
      0
    );
    setTotalProductsCart(totalProducts);
  }, [productsCart]);
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <span>FASHIONISTA</span>
        </Link>
        <div className="header__actions">
          <span>PQ</span>
          <span>CP {totalProductsCart}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
