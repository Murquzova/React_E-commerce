import React from 'react';
import { useCart } from 'react-use-cart';
import mod from './CartCard.module.css';

const CartCard = ({ item }) => {
  const { updateItemQuantity } = useCart();

  return (
    <tr>
      <td>
        <div className={mod.image}>
          <img src={item.image} alt="" />
        </div>
      </td>
      <td>{item.title.slice(0, 30)}</td>
      <td>
        <div className={mod.kol}>
          <div
            onClick={() => {
              updateItemQuantity(item.id, item.quantity - 1);
            }}
          >
            -
          </div>
          <div>{item.quantity}</div>
          <div
            onClick={() => {
              updateItemQuantity(item.id, item.quantity + 1);
            }}
          >
            +
          </div>
        </div>
      </td>
      <td>${item.itemTotal.toFixed(2)}</td>
    </tr>
  );
};

export default CartCard;

