import React, { useState, useEffect } from 'react';
import { Slider } from '@material-ui/core';
import './RangeSlider.css';

const RangeSlider = ({ products, setDisplayProducts, displayProducts }) => {
  const [sts, setSts] = useState([]);
  const [value, setValue] = useState([0, 1000]);

  const changeValue = (e, value) => {
    setValue(value);
    const newV = products.filter((hotel) => {
      if (value[0] < hotel.price && value[1] > hotel.price) {
        return hotel;
      }
    });
    setSts(newV);
  };
  useEffect(() => {
    setDisplayProducts(sts);
  }, [sts]);

  return (
    <div className="slider">
      <div className="qiymet">Qiymət aralığı</div>
      <Slider
        style={{ width: '100%' }}
        min={0}
        max={1000}
        defaultValue={20}
        valueLabelDisplay="auto"
        value={value}
        onChange={changeValue}
      />
    </div>
  );
};

export default RangeSlider;
