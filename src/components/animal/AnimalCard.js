import React from "react";
import "./Animal.css";

// export const AnimalCard = ({animal}) => (
//   <section className="animal">
//     <h3 className="animal__name">{animal.name}</h3>
//     <div className="animal__breed">{animal.breed}</div>

//   </section>
// );
export const AnimalCard = ({ animal, deleteAnimal }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{animal.name}</span>
        </h3>
        <p>Breed: {animal.breed}</p>
        <button type="button" onClick={() => deleteAnimal(animal.id)}>
          Discharge
        </button>
      </div>
    </div>
  );
};