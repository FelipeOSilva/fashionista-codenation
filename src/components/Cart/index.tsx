import React from "react";
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
  const { productsCart } = useSelector((state: Store) => state);
  const dispatch = useDispatch();

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
      <button onClick={handleShowCart}>
        <FiArrowLeft />
      </button>
      <div className="products__list__cart">
        {productsCart.map((product) => (
          <div className="product__list__item" key={product.id}>
            <figure className="product__image">
              <img
                src={product.image || withoutImage}
                alt="Teste"
                width="100%"
              />
            </figure>
            <div className="product__list__info">
              <span className="product__list__name">{product.name}</span>
              <span className="product__list__size">{product.size}</span>

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

              <div className="product__cart__controll">
                <div className="product__list__quantity">
                  <button onClick={() => handleDecrementCart(product)}>
                    <FiMinusSquare size={24} />
                  </button>
                  <span>{product.qtdCart}</span>
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
    </div>
  );
};

export default Cart;
