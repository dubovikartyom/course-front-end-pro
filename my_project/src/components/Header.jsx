import logo from "../static/logo.svg";
import React from "react";
import Button from "./common/Button";
import "../css/Header.css";


function Header() {
  return (
    <header>
      <img src={logo} className="header_logo" alt="logo" />
      <div className="header_btn_group">
        <Button name="Button" onClick={() => console.log('Hello world!')} />
        <Button name="Button" onClick={() => console.log('Hello world!')}/>
        <Button name="Button" omClick={() => console.log('Hello world')} />
      </div>
    </header>
  );
}


export default Header;
