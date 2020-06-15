import React, { useState, useEffect, ChangeEvent } from "react";
import Header from "../../components/Header";
import { ProductItem, Store } from "../../types";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { incrementProductCart } from "../../store/actions";
import withoutImage from "../../assets/unavaliable.png";

const DetailProduct = () => {
  const [product, setProduct] = useState<ProductItem>({
    id: 0,
    qtdCart: 0,
    name: "",
    style: "",
    code_color: "",
    color_slug: "",
    color: "",
    on_sale: false,
    regular_price: "",
    actual_price: "",
    discount_percentage: "",
    installments: "",
    image: "",
    sizes: [],
  });
  const { products } = useSelector((state: Store) => state);
  const dispatch = useDispatch();

  const { id: idProduct } = useParams();

  useEffect(() => {
    let product = products.find((product) => product.id === Number(idProduct));
    if (product) {
      setProduct(product);
    }
  }, [idProduct, products]);

  function handleSizeChange(event: ChangeEvent<HTMLSelectElement>) {
    setProduct({
      ...product,
      size: event.target.value,
    });
  }

  function handleAddCart() {
    dispatch(incrementProductCart(product));
  }

  return (
    <>
      <Header />
      <figure className="product__image">
        <img
          src={product.image || withoutImage}
          alt={product.name}
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
        <select
          name="size"
          id="size"
          value={product.size}
          onChange={handleSizeChange}
        >
          <option value="">Selecione um tamanho</option>
          {product.sizes.map((size) => (
            <option
              key={size.size}
              value={size.size}
              disabled={!size.available}
            >
              {size.size}
            </option>
          ))}
        </select>
        <button onClick={handleAddCart} disabled={!product.size}>
          Adicionar ao carrinho
        </button>
      </div>
    </>
  );
};

export default DetailProduct;
