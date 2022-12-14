import "../css/Main.css";
import React, { Component } from "react";
import axios from "axios";
import Card from "./common/Card";
import Orders from "./Orders";


export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: null,
      choice: []
    };
  }

  getList = () => {
    axios.get("https://swapi.dev/api/starships/").then((res) => {
      const o_productList = res.data.results;
      this.setState({ productList: o_productList });
    });
  };

  componentDidMount = () => {
    this.getList();
  };


  render() {
    if (this.state.productList != null) {
      var cardArr = this.state.productList.map((x, index)=> <Card item={x} key={`${index}${x.MGLT}`}/>);

      return (
        <div className="main with_products">
          <Orders products={this.state.choice}/>
          {cardArr}
        </div>
      );
    } else {
      return (
        <div className="main">
          <div classname="container">
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
            <div classname="block"></div>
          </div>
        </div>
      );
    }
  }
}

export default Main;
