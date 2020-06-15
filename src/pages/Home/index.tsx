import React, { useEffect } from "react";

import withoutImage from "../../assets/unavaliable.png";

import "./styles.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { useSelector } from "react-redux";
import { Store } from "../../types";
import Cart from "../../components/Cart";
import Search from "../../components/Search";

const Home = () => {
  const { products } = useSelector((state: Store) => state);

  return (
    <>
      <Header />

      <main className="container">
        <ul className="products">
          {products.map((product, index) => (
            <li className="product__box" key={index}>
              <Link to={`product/${index}`}>
                <figure className="product__image">
                  <img
                    src={product.image || withoutImage}
                    alt="Teste"
                    width="100%"
                  />
                </figure>
                <div className="product__info">
                  <span className="product__name">{product.name}</span>
                  {product.on_sale ? (
                    <div>
                      <del className="product__price product__price--from">
                        {product.regular_price}
                      </del>
                      <span className="product__price product__price--to">
                        {product.actual_price}
                      </span>
                    </div>
                  ) : (
                    <span className="product__price product__price--to">
                      {product.actual_price}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Cart />
      <Search />
      <footer></footer>
    </>
  );
};

export default Home;
