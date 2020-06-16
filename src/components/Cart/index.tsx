import React, { useState, useEffect } from "react";
import withoutImage from "../../assets/unavaliable.png";
import { useSelector, useDispatch } from "react-redux";
import { Store, ProductItem } from "../../types";
import {
  incrementProductCart,
  decrementProductCart,
  removeProductCart,
} from "../../store/actions";
import {
  FiMinusSquare,
  FiPlusSquare,
  FiTrash2,
  FiArrowLeft,
} from "react-icons/fi";

import "./styles.css";

interface Props {
  handleShowCart: () => void;
}

const Cart: React.FC<Props> = ({ handleShowCart }) => {
  const [subtotal, setSubtotal] = useState(0.0);
  const { productsCart } = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = productsCart.reduce(
      (accumulator, product) =>
        accumulator +
        product.qtdCart *
          parseFloat(product.actual_price.substr(3).replace(",", ".")),
      0
    );

    setSubtotal(Number(total));
  }, [productsCart]);

  function handleIncrementCart(product: ProductItem) {
    dispatch(incrementProductCart(product));
  }

  function handleDecrementCart(product: ProductItem) {
    dispatch(decrementProductCart(product));
  }

  function handleRemoveCart(product: ProductItem) {
    dispatch(removeProductCart(product));
  }

  return (
    <div className="cart">
      <header className="header__cart">
        <div className="container container--cart">
          <button onClick={handleShowCart} className="header__back__button">
            <FiArrowLeft size={22} />
          </button>
          <span className="cart__header__title">Carrinho</span>
        </div>
      </header>
      <div className="cart__content">
        {productsCart.length ? (
          <div className="products__list__cart">
            {productsCart.map((product) => (
              <div
                className="product__list__item"
                key={`${product.id}+${product.size}`}
              >
                <figure className="product__image__cart">
                  <img
                    src={product.image || withoutImage}
                    alt="Teste"
                    width="100%"
                  />
                </figure>
                <div className="product__list__item__cart">
                  <div className="product__list__info">
                    <div className="product__cart__info">
                      <span className="product__list__name">
                        {product.name}
                      </span>
                      <span className="product__list__size">
                        Tamanho: {product.size}
                      </span>
                    </div>
                    <div className="product__list__prices">
                      <div className="product__prices">
                        <span className="product__price">
                          {product.actual_price}
                        </span>
                      </div>
                      <span className="product__price__installments">
                        {product.installments}
                      </span>
                    </div>
                  </div>
                  <div className="product__cart__controll">
                    <div className="product__list__quantity">
                      <button onClick={() => handleDecrementCart(product)}>
                        <FiMinusSquare size={24} />
                      </button>
                      <span className="product__cart__qtdCart">
                        {product.qtdCart}
                      </span>
                      <button onClick={() => handleIncrementCart(product)}>
                        <FiPlusSquare size={24} />
                      </button>
                    </div>
                    <button
                      className="product__remove__cart"
                      onClick={() => handleRemoveCart(product)}
                    >
                      <FiTrash2 size={24} color="#d9534f" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="cart__empty">Nenhum item no carrinho.</div>
        )}
      </div>
      <div className="cart__subtotal">Subtotal - R$ {subtotal.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
