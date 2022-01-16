import React from 'react';
import { useCart } from 'react-use-cart';
import mod from './ProductCart.module.css';

const ProductCart = ({ product }) => {
  const { addItem } = useCart();
  return (
    <div className={mod.box}>
      <div className={mod.image}>
        <img src={product.image} alt="" />
      </div>
      <div className={mod.text}>
        <p>{product.title}</p>
        <div className={mod.inside}>
          <span>${product.price.toFixed(2)}</span>
          <div onClick={() => addItem(product)} className={mod.add}>
            <i class="fas fa-cart-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
