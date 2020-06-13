import React, { useEffect } from "react";

import withoutImage from "../../assets/unavaliable.png";

import "./styles.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { setProducts } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../types";

const Home = () => {
  const { products } = useSelector((state: Store) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setProducts([
        {
          name: "VESTIDO TRANSPASSE BOW",
          style: "20002605",
          code_color: "20002605_613",
          color_slug: "tapecaria",
          color: "TAPEÇARIA",
          on_sale: false,
          regular_price: "R$ 199,90",
          actual_price: "R$ 199,90",
          discount_percentage: "",
          installments: "3x R$ 66,63",
          image:
            "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
          sizes: [
            {
              available: false,
              size: "PP",
              sku: "5807_343_0_PP",
            },
            {
              available: true,
              size: "P",
              sku: "5807_343_0_P",
            },
            {
              available: true,
              size: "M",
              sku: "5807_343_0_M",
            },
            {
              available: true,
              size: "G",
              sku: "5807_343_0_G",
            },
            {
              available: false,
              size: "GG",
              sku: "5807_343_0_GG",
            },
          ],
        },
        {
          name: "REGATA ALCINHA FOLK",
          style: "20002570",
          code_color: "20002570_614",
          color_slug: "preto",
          color: "PRETO",
          on_sale: false,
          regular_price: "R$ 99,90",
          actual_price: "R$ 99,90",
          discount_percentage: "",
          installments: "3x R$ 33,30",
          image:
            "https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg",
          sizes: [
            {
              available: true,
              size: "PP",
              sku: "5723_40130843_0_PP",
            },
            {
              available: true,
              size: "P",
              sku: "5723_40130843_0_P",
            },
            {
              available: true,
              size: "M",
              sku: "5723_40130843_0_M",
            },
            {
              available: true,
              size: "G",
              sku: "5723_40130843_0_G",
            },
            {
              available: true,
              size: "GG",
              sku: "5723_40130843_0_GG",
            },
          ],
        },
      ])
    );
  }, []);

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
      <footer></footer>
    </>
  );
};

export default Home;
