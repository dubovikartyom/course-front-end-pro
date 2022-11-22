import React from "react";
import "../css/Main.css";
//import logo from "../static/logo.svg";
import axios from "axios";

function Main() {

  const getList = () => {
    axios.get("https://swapi.dev/api/people/1/").then((res) => {
      const character = res.data;
      console.log(character);
      const main = document.querySelector(".main");
      main.innerHTML = `
      <div class="card">
      <div class="card_item"><img src="https://www.slashfilm.com/img/gallery/heres-what-the-new-luke-skywalker-looks-like-under-his-digital-mask/l-intro-1644193087.jpg" alt="character" /></div>
      <div class="card_item"><div class="label">Name:</div><div class="charInfo">${character.name}</div></div>
      <div class="card_item"><div class="label">Height:</div><div class="charInfo">${character.height}</div></div>
      <div class="card_item"><div class="label">Hair:</div><div class="charInfo">${character.hair_color}</div></div>
      </div>
      `;
    });
  };

  return (
    <div className="main" onLoad={setTimeout(getList(), 1000)}>
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

export default Main;
