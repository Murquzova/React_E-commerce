import React from 'react';
import { useState, useEffect } from 'react';
import mod from './Products.module.css';
import ReactPaginate from 'react-paginate';
import ProductCart from '../ProductCart/ProductCart';
import RangeSlider from '../RangeSlider/RangeSlider';
const Products = ({ setFilter, filter, products, setProducts }) => {
  const categories = ['ALL', `Clothing`, `Jewelery`, `Electronics`];

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 12;
  const pagesVisited = pageNumber * productPerPage;

  const [displayProducts, setDisplayProducts] = useState(
    products.slice(pagesVisited, pagesVisited + productPerPage)
  );
  const pageCount = Math.ceil(products.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    setDisplayProducts(
      products.slice(pagesVisited, pagesVisited + productPerPage)
    );
  }, [pageNumber]);
  useEffect(() => {
    proa_z();
  }, []);
  const handleClick = (a) => {
    setFilter({
      type: 'category',
      value: a.target.innerHTML,
    });
  };

  function proa_z() {
    products.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
    console.log(products);
    setDisplayProducts(
      products.slice(pagesVisited, pagesVisited + productPerPage)
    );
  }

  function getComboA(e) {
    if (e.target.value == 'Value1') {
      products.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      console.log(products);
      setDisplayProducts(
        products.slice(pagesVisited, pagesVisited + productPerPage)
      );
    }
    if (e.target.value == 'Value2') {
      products.sort(function (a, b) {
        return b.title.localeCompare(a.title);
      });
      console.log(products);
      setDisplayProducts(
        products.slice(pagesVisited, pagesVisited + productPerPage)
      );
    }
    if (e.target.value == 'Value3') {
      products.sort(function (a, b) {
        return a.price - b.price;
      });
      console.log(products);
      setDisplayProducts(
        products.slice(pagesVisited, pagesVisited + productPerPage)
      );
    }
    if (e.target.value == 'Value4') {
      products.sort(function (a, b) {
        return b.price - a.price;
      });
      console.log(products);
      setDisplayProducts(
        products.slice(pagesVisited, pagesVisited + productPerPage)
      );
    }
  }
  return (
    <div className={mod.body}>
      <div className="container px-1">
        <div className="row mt-4">
          <div className={mod.select}>
            <select onChange={(e) => getComboA(e)}>
              <option value="Value1">Ada görə (A-Z)</option>
              <option value="Value2">Ada görə (Z-A)</option>
              <option value="Value3">Qiymətə görə (+)</option>
              <option value="Value4">Qiymətə görə (-)</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mt-2">
            <div className={mod.category}>
              <ul className={mod.category_ul}>
                Kateqoriyalar
                {categories.map((a) => {
                  return (
                    <li
                      onClick={(e) => handleClick(e)}
                      className={filter.value === a ? `${mod.active_cat}` : ''}
                    >
                      {a}
                    </li>
                  );
                })}
              </ul>
            </div>
            <RangeSlider
              products={products}
              displayProducts={displayProducts}
              setDisplayProducts={setDisplayProducts}
            />
          </div>
          <div className="col-md-9 mt-2  ">
            <div className="d-flex flex-wrap justify-content-around">
              {displayProducts.map((product, index) => {
                return product[filter.type]
                  .toLowerCase()
                  .includes(filter.value.toLowerCase()) ? (
                  <ProductCart product={product} key={index} />
                ) : null;
              })}
            </div>
            <div>
              <ReactPaginate
                previousLabel={'🡨'}
                nextLabel={'🡪'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={mod.pagination}
                pageClassName={mod.item}
                pageLinkClassName={mod.link}
                previousClassName={mod.item}
                previousLinkClassName={mod.link}
                nextClassName={mod.item}
                nextLinkClassName={mod.link}
                breakClassName={mod.item}
                breakLinkClassName={mod.link}
                activeClassName={mod.pactive}
                disabledClassName={mod.disabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
