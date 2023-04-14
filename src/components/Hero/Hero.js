import React from "react";
import './Hero.css';

export default function Hero(){
  return (
    <div className="hero">
      <div className="heroContent">
        <h1 className="heroTitle">Welcome to PizzaSpot</h1>
        <p className="heroSubtitle">
          Delicious Pizzas, Made Fresh for You
        </p>
        <button className="heroButton">Order Now</button>
      </div>
      <div className="heroImage">
        <img src="/images/pizzaimage.png" alt="Pizza" />
      </div>
    </div>
  );
};
