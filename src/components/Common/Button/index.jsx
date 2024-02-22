import React from "react";
import arrow from "../../../assets/arrow-right.svg";
import "./style.css";
const Button = ({ text, onButtonClick }) => {
  return (
    <div onClick={onButtonClick} className="button">
      {text} <img src={arrow} alt="arrow" />
    </div>
  );
};

export default Button;
