import React from 'react'
import "../../css/common/card.css";




function Card(props) {

  return (
    <div className="card">
        <div className="card_pic"><img src="https://www.denofgeek.com/wp-content/uploads/2016/01/millennium-falcon.jpg" alt="ship" /></div>
        <div className="card_name place">Name: {props.item.name}</div>
        <div className="card_model place">Model: {props.item.model}</div>
        <div className="card_manufacturer place">Manufacturer: {props.item.manufacturer}</div>
        <div className="card_speed place">Speed: {props.item.max_atmosphering_speed}</div>
        <div className="card_cost place">Cost: {props.item.cost_in_credits}</div>
    </div>
  )
}

export default Card