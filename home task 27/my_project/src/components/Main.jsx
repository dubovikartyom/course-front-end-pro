import "../css/Main.css";
import React, { Component } from "react";
import getList from "../helpers/starWarsAPI.js";

const productList = JSON.stringify(getList());

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getListproduct: false
    };
  }


  render() {
    if (this.state.getListproduct) {
      return(
        <div className="main">
          <div className="card">{JSON.parse(productList).results[0].name}</div>
        </div>
      )
    } else {
      return (
        <div className="main" onLoad={setInterval(() => { this.setState({getListproduct:true}) }, 3000)}>
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
