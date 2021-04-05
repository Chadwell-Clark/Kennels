import React, { useState } from "react";
//   ***  Below is vanilla JS  ***..//
//   !!  props expects an object passed in with keys and values
export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  let [isHidden, setIsHidden] =useState(false);

  const handleClick = () => {
    //   ***  Good Practice Below!!!  ***   //
    //   ***  Make a Copy of state, modify it and then setState to Copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  const handleHide = () => {
    if(isHidden) {
      setIsHidden(false)
    } else {
      setIsHidden(true)
    }
  }
//   ***  Below is a JSX return  ***   //
  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={handleClick}>ClickMe</button>
      <button onClick={handleHide}>Hide/Show</button>
      <div hidden={isHidden}>Help I'm a Rock</div>
    </>
  );
};

