import React from "react";
import "./ColorViewer.css";
const color = "#BADA55";
function ColorViewer() {
  return (
    <div className="color-viewer-container">
      <h4>Current Color Is: {color}</h4>
      <div className="color-div" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default ColorViewer;
