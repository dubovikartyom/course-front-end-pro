import logo from "../static/logo.svg";
import React from "react";
import Button from "./common/Button";
import "../css/Header.css";

function Header() {
  return (
    <header>
      <img src={logo} className="header_logo" alt="logo" />
      <div className="header_title"><h2>My first react project</h2></div>
      <div className="header_btn_group">
        <Button />
        <Button />
        <Button />
      </div>
    </header>
  );
}

export default Header;
