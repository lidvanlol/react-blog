import React from "react";
import "./style.scss";
import Button from "../SharedComponents/Button";

function Top({ click }) {
  return (
    <section className="Top">
      <h2>Welcome to My Blog</h2>

      <div className="top_box">
        <p>Container for showing application messages</p>
        <div className="close-btn">x</div>
      </div>
      <Button click={click} label="Add post" />
    </section>
  );
}

export default Top;
