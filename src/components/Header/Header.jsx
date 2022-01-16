import React, { useState } from 'react';
import mod from './Header.module.css';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
const Header = () => {
  const [menu, setMenu] = useState(false);
  const { totalItems } = useCart();
  console.log(totalItems);
  return (
    <header className={mod.header}>
      <div className={mod.logo}>
        <span className={mod.green}>Green</span>
        <span className={mod.blue}>Tekno</span>
      </div>
      <div className={mod.menu}>
        <i onClick={() => setMenu(!menu)} class="fas fa-bars"></i>
        <div className={menu ? `${mod.mob}` : ` ${mod.mob2}`}>
          <i onClick={() => setMenu(!menu)} class="fas fa-times"></i>
          <ul>
            <li>
              <Link to="/">Ana səhifə</Link>
            </li>
            <li>
              <Link to="/">Məhsullar</Link>
            </li>
            <li>Endirimlər</li>
          </ul>
        </div>
      </div>
      <div>
        <div className={mod.cart}>
          <Link to="/cart">
            <i className="fas fa-shopping-cart">
              <sup className={mod.sup}>{totalItems ? totalItems : null}</sup>
            </i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
