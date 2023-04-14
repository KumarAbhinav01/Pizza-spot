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
        <a href="#pizza">
        <button className="heroButton">Order Now</button>
        </a>

      </div>
      <div className="heroImage">
        <img src="/images/pizzaimage.png" alt="Pizza" />
      </div>
    </div>
  );
};
