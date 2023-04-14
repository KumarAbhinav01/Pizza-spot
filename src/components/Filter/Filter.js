import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ filterItem, uniqueList, setPizzaData, PizzaApi }) => {
  const [sortBy, setSortBy] = useState(null);

  const handleSortByPrice = () => {
    const sortedData = [...PizzaApi].sort((a, b) => a.price - b.price);
    setPizzaData(sortedData);
    setSortBy('price');
  };

  const handleSortByRating = () => {
    const sortedData = [...PizzaApi].sort((a, b) => b.rating - a.rating);
    setPizzaData(sortedData);
    setSortBy('rating');
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
        <button
            className="btn-group__item"
            onClick={() => {
              setPizzaData(PizzaApi);
              setSortBy(null);
            }}
          >
            All
          </button>
          {uniqueList?.map((data) => {
            return (
              <button
                key={data}
                className="btn-group__item"
                onClick={() => filterItem(data)}
              >
                {data ? 'Veg' : 'Non-Veg'}
              </button>
            );
          })}
          
          <button
            className={`btn-group__item ${
              sortBy === 'price' ? 'btn-group__item--active' : ''
            }`}
            onClick={handleSortByPrice}
          >
            Sort by Price
          </button>
          <button
            className={`btn-group__item ${
              sortBy === 'rating' ? 'btn-group__item--active' : ''
            }`}
            onClick={handleSortByRating}
          >
            Sort by Rating
          </button>
        </div>
      </nav>
    </>
  );
};

export default Filter;
