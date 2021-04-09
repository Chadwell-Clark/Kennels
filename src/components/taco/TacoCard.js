import React from "react";
import "./Taco.css";

export const TacoCard = ({taco,devourTaco}) => (
  <section className="taco">
    <h2 className="taco__name">Taco</h2>
    <img
      src="https://deltaco.com/files/menu/item/1-The-Del-Taco-%28Crunchy%29.png?v=3.99"
      alt="Delicious taco"
    ></img>
    <div id="taco">
      Taco Force
    </div>
  </section>
);
