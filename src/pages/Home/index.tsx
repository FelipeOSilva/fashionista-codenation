import React from "react";

import withoutImage from "../../assets/unavaliable.png";

import "./styles.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { useSelector } from "react-redux";
import { Store } from "../../types";

const Home = () => {
  const { products } = useSelector((state: Store) => state);

  return (
    <>
      <Header />

      <main className="container">
        <ul className="products">
          {products.map((product) => (
            <Link to={`product/${product.id}`} key={product.id}>
              <li className="product__box">
                <figure className="product__image__home">
                  {product.on_sale && (
                    <span className="badge__image__discount">
                      {product.discount_percentage}
                    </span>
                  )}
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
              </li>
            </Link>
          ))}
        </ul>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
