import React from "react";
import "./Boxone.css";

function addPopovers() {
  // Get all the "box-one" divs
  const boxOnes = document.querySelectorAll(".box-one");

  // Loop through each "box-one" div
  boxOnes.forEach((boxOne) => {
    // Create the popover element
    const popover = document.createElement("div");
    popover.classList.add("popover");
    popover.innerText = "Popover Text"; // Change this to your desired text

    // Append the popover to the "box-one" div
    boxOne.appendChild(popover);
  });
}

const Boxone = () => {
  addPopovers();
  return (
    <div className="box-full">
      <div className="box-one"></div>
      <div className="box-one"></div>
      <div className="box-one"></div>
      <div className="box-one"></div>
    </div>
  );
};

export default Boxone;
