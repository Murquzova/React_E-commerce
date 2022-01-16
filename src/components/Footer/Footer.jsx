import React from 'react';
import mod from './Footer.module.css';
const Footer = () => {
  return (
    <footer>
      <div className="container-md">
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center">
            {/* <div className={mod.logo}> */}
            <span className={mod.green}>Green</span>
            <span className={mod.blue}>Tekno</span>
            {/* </div> */}
          </div>
          <div className="col-md-9">
            <div className={mod.foot_ul}>
              <ul>
                Bizi izləyin:
                <li>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-facebook"></i>
                </li>
              </ul>
              <ul>
                Əlaqə:
                <li>+994 55 123 45 67</li>
                <li>info@mail.com</li>
              </ul>
              <ul>
                Ünvan:
                <li>Atatürk prospekti 58</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
