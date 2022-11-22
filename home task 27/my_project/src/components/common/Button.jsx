import React from "react";
import "../../css/common/button.css";

const Button = ({ name, onClick }) => {
  return (
    <button class="custom-btn btn-7" onClick={onClick}>
      <span>{name ? name : "Button"}</span>
    </button>
  );
};

export default Button;
