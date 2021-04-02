import React, { useState } from "react";
//   ***  Below is vanilla JS  ***..//
export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //   ***  Good Practice Below!!!  ***   //
    //   ***  Make a Copy of state, modify it and then setState to Copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }
//   ***  Below is a JSX return  ***   //
  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>ClickMe</button>
    </>
  );
};

