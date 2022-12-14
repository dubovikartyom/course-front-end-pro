import React from "react";
import "../../css/common/card.css";

export default function Card({products, actionClick}) {

  const handleClick = () => {
    const name = products.name;
    actionClick(name)
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card_pic">
        <img src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg" alt="ship"/>
      </div>
      <div className="card_name place">Name: {products.name}</div>
      <div className="card_model place">Model: {products.model}</div>
      <div className="card_manufacturer place">
        Manufacturer: {products.manufacturer}
      </div>
      <div className="card_speed place">
        Speed: {products.max_atmosphering_speed}
      </div>
      <div className="card_cost place">Cost: {products.cost_in_credits}</div>
    </div>
  );
}


