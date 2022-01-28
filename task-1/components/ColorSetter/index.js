import React from "react";

function ColorSetter() {
  function handleChange(e) {
    const { value } = e.target;
    console.log(value);
  }
  return (
    <div className="color-setter-container">
      <h4>
        Set The color: <input type="color" onChange={handleChange} />
      </h4>
    </div>
  );
}

export default ColorSetter;
