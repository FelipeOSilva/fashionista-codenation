import React, { useState, ChangeEvent, useEffect } from "react";
import withoutImage from "../../assets/unavaliable.png";
import { Store, ProductItem } from "../../types";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./styles.css";
import { FiArrowLeft } from "react-icons/fi";

interface Props {
  handleShowSearch: () => void;
}
const Search: React.FC<Props> = ({ handleShowSearch }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<ProductItem[]>([]);
  const { products } = useSelector((state: Store) => state);

  useEffect(() => {
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
    <div className="search__box">
      <div className="search">
        <header className="header__search">
          <div className="container container--search">
            <button onClick={handleShowSearch} className="header__back__button">
              <FiArrowLeft size={22} />
            </button>
            <span className="search__header__title">Pesquisa</span>
          </div>
        </header>
        <div className="search__content">
          <div className="search__form">
            <input
              type="text"
              className="search__form__input"
              placeholder="Buscar produto por nome..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          {filtered.length ? (
            <div className="product__list">
              {filtered.map((product: ProductItem) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  onClick={handleShowSearch}
                >
                  <div className="product__list__item">
                    <figure className="product__image__search">
                      <img
                        src={product.image || withoutImage}
                        alt="Teste"
                        width="100%"
                      />
                    </figure>
                    <div className="product__list__info__search">
                      <span className="product__list__name">
                        {product.name}
                      </span>
                    </div>
                    <div className="product__list__prices">
                      <div className="product__prices">
                        <span className="product__price product__price--to">
                          {product.actual_price}
                        </span>
                      </div>
                      <span className="product__price__installments">
                        {product.installments}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="search__empty">Nenhum item encontrado</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
