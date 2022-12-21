import "../css/Main.css";
import React, { Component } from "react";
import axios from "axios";
import Orders from "./Orders";
import Card from "./common/Card";


export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: null,
      choice: [],
      activeUser: true,
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

  handleClick = (name) => {
    let currentChoice = this.state.choice;
    currentChoice.push(name);
    this.setState({
      choice: currentChoice,
    });
  };

  clear = () => {
    this.setState({
      choice: [],
    });
  };

  sort = () => {
    const currentValue = this.state.choice;
    currentValue.sort();
    this.setState({
      choice: currentValue,
    });
  };

  render() {
    if (this.state.productList != null) {
      return (
        <div className="main with_products">
          <Orders
            products={this.state.choice}
            funcClear={this.clear}
            funcSort={this.sort}
          />
          {this.state.productList.map((x, index) => (
            <Card
              key={`${index}`}
              products={x}
              actionClick={this.handleClick}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div class="main">
          <div class="container">
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
            <div class="block"></div>
          </div>
        </div>
      );
    }
  }
}

export default Main;
