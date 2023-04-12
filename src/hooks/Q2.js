import React, { useState, useEffect } from "react";
import Hill1 from "../Images/hill1.jpg";
import Hill2 from "../Images/hill2.jpg";
import Hill3 from "../Images/hill3.jpg";
import Hill4 from "../Images/hill4.jpg";
import Hill5 from "../Images/hill5.jpg";
const Q2 = () => {
  const images = [Hill1, Hill2, Hill3, Hill4, Hill5];
  const [ind, setInd] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const prevHandler = () => {
    if (ind === 1) {
      setInd(ind - 1);
      setShowPrev(false);
    } else {
      setShowPrev(true);
      setShowNext(true);
      setInd(ind - 1);
    }
  };
  const nextHandler = () => {
    if (ind === images.length - 2) {
      setInd(ind + 1);
      setShowNext(false);
    } else {
      setShowPrev(true);
      setShowNext(true);
      setInd(ind + 1);
    }
  };
  return (
    <>
      {showPrev && <button onClick={prevHandler}>Prev</button>}
      <img src={images[ind]} alt="horse" />

      {showNext && <button onClick={nextHandler}>Next</button>}
      <h1>Index-{ind}</h1>
    </>
  );
};
export default Q2;
