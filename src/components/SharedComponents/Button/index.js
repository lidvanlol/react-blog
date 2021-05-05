import React from "react";
import "./style.scss";

function Button(props) {
  const { click, label, type } = props;
  return (
    <>
      <button type={type || "button"} className="Button" onClick={click}>
        {label}
      </button>
    </>
  );
}

export default Button;
