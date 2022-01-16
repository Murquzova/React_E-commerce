import React from 'react';
import mod from './UnderHeader.module.css';

const UnderHeader = ({ setFilter }) => {
  const handleInput = (e) => {
    setFilter({
      type: e.target.name,
      value: e.target.value,
    });
  };
  return (
    <div className={mod.under}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <div className={mod.name_poisk}>
            <input
              name="title"
              onChange={handleInput}
              type="text"
              placeholder="Məshul axtar(by title)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderHeader;
