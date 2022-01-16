import React from 'react';
import { useCart } from 'react-use-cart';
import CartCard from '../CartCard/CartCard';
import mod from './CartScreen.module.css';

const CartScreen = () => {
  const { isEmpty, items } = useCart();
  const calculatePrice = () => {
    let totalPrice = items.reduce((acc, item) => acc + item.itemTotal, 0);
    console.log(totalPrice);
    return totalPrice.toFixed(2);
  };

  if (isEmpty) {
    return (
      <div className={mod.tovari}>
        <div className="container-lg p-md-4">
          <div className="row">
            <div className="col-lg-8 px-2 ">
              <span className={mod.name}>Səbət </span>
              <p className={mod.empty}>Səbətiniz boşdur!</p>
            </div>
            <div className="col-lg-4 mt-4  d-flex justify-content-center">
              <div className={mod.total}>
                <div>
                  <input placeholder="Promokod" type="text" />
                  <button>🡢</button>
                </div>
                <div>
                  <span className={mod.text}>Endirim</span>
                  <span className={mod.price}>0 AZN</span>
                </div>
                <div>
                  <span className={mod.text}>Çatdırılma</span>
                  <span className={mod.price}>0 AZN</span>
                </div>
                <div>
                  <span className={mod.all}>Toplam</span>
                  <span className={mod.price_total}>
                    {calculatePrice()} AZN
                  </span>
                </div>
                <button>Sifarişi rəsmiləşdir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={mod.tovari}>
        <div className="container-lg p-4">
          <div className="row">
            <div className="col-lg-8 px-2 ">
              <span className={mod.name}>Səbət </span>
              <div class="table-responsive-xl">
                <table class="table mt-3">
                  <tbody>
                    {items.map((item) => (
                      <CartCard item={item} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4 mt-4  d-flex justify-content-center">
              <div className={mod.total}>
                <div>
                  <input placeholder="Promokod" type="text" />
                  <button>🡢</button>
                </div>
                <div>
                  <span className={mod.text}>Endirim</span>
                  <span className={mod.price}>0 AZN</span>
                </div>
                <div>
                  <span className={mod.text}>Çatdırılma</span>
                  <span className={mod.price}>0 AZN</span>
                </div>
                <div>
                  <span className={mod.all}>Toplam</span>
                  <span className={mod.price_total}>
                    {calculatePrice()} AZN
                  </span>
                </div>
                <button>Sifarişi rəsmiləşdir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CartScreen;
