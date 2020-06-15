import React, { useState, ChangeEvent, useEffect } from "react";
import withoutImage from "../../assets/unavaliable.png";
import { Store, ProductItem } from "../../types";
import { useSelector } from "react-redux";

const Search = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<ProductItem[]>([]);
  const { products } = useSelector((state: Store) => state);

  useEffect(() => {
    console.log(search);
    if (search === "") {
      return setFiltered([]);
    }

    setFiltered(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <>
      <div className="seach__form">
        <input
          type="text"
          className="search__form__input"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="product__list">
        {filtered.map((product) => (
          <div className="product__list__item" key={product.id}>
            <figure className="product__image">
              <img
                src={product.image || withoutImage}
                alt="Teste"
                width="100%"
              />
            </figure>
            <div className="product__list__info">
              <span className="product__list__name"></span>
            </div>
            <div className="product__list__prices">
              <div className="product__prices">
                {product.on_sale ? (
                  <>
                    <del className="product__price product__price--from">
                      {product.regular_price}
                    </del>
                    <span className="product__price product__price--to">
                      {product.actual_price}
                    </span>
                  </>
                ) : (
                  <span className="product__price product__price--to">
                    {product.actual_price}
                  </span>
                )}
              </div>
              <span className="product__price__installments">
                {product.installments}
              </span>
            </div>
          </div>
        ))}{" "}
      </div>
    </>
  );
};

export default Search;
