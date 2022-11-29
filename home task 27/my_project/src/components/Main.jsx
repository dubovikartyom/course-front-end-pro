import "../css/Main.css";
import React, { Component } from "react";
import axios from "axios";
import Card from "./common/Card"


export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: null
    };
  }

  getList() {
    axios.get("https://swapi.dev/api/starships/").then((res) => {
      const o_productList = res.data.results;
      this.setState({productList: o_productList});
    });
  }
  
  componentDidMount() {
    this.getList()
  }
  


  render() {

    if (this.state.productList != null) {
      return(
        <div className="main with_products">
          <Card item={this.state.productList[0]}/>
          <Card item={this.state.productList[1]}/>
          <Card item={this.state.productList[2]}/>
          <Card item={this.state.productList[3]}/>
          <Card item={this.state.productList[4]}/>
          <Card item={this.state.productList[5]}/>
        </div>
      )
    } else {
      return (
        <div className="main" onLoad={this.componentDidMount()}>
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
