import React from 'react'
import "../css/Orders.css";


function Orders({products, funcClear, funcSort}) {

const myOrders = products.map((x,i)=> <p key={`${x}${i}`}>{x}</p>);


if(myOrders.length > 0){
  return (
    <div className="orders_list">
        <h2>My Orders:</h2>
        {myOrders}
        <button className='btnOrders sort' onClick={funcSort}>Sort</button>
        <button className='btnOrders clear' onClick={funcClear}>Clear</button>
    </div>
  )
}else{
  return (
    <div className="orders_list">
        <h2>My Orders:</h2>
    </div>
  )
}
  
}

export default Orders