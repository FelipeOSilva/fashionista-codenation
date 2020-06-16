import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Store } from "../../types";
import { useSelector } from "react-redux";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import "./styles.css";
import Search from "../Search";
import Cart from "../Cart";

const Header = () => {
  const [totalProductsCart, setTotalProductsCart] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { productsCart } = useSelector((state: Store) => state);

  function handleShowCart() {
    setShowCart(!showCart);
  }
  function handleShowSearch() {
    setShowSearch(!showSearch);
  }

  useEffect(() => {
    let totalProducts = productsCart.reduce(
      (accumulator, product) => accumulator + product.qtdCart,
      0
    );
    setTotalProductsCart(totalProducts);
  }, [productsCart]);
  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/">
            <span className="header__logo">FASHIONISTA</span>
          </Link>
          <div className="header__actions">
            <button className="action__search" onClick={handleShowSearch}>
              <FiSearch />
            </button>
            <button className="action__cart" onClick={handleShowCart}>
              <FiShoppingBag />
              <sup className="bagde__header">{totalProductsCart}</sup>
            </button>
          </div>
        </div>
      </header>
      {showCart && <Cart handleShowCart={handleShowCart} />}
      {showSearch && <Search handleShowSearch={handleShowSearch} />}
    </>
  );
};

export default Header;
