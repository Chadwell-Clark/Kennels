import React, { useState, useEffect } from "react";
import { dischargeAnimal, getAnimalById } from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { useParams, useHistory } from "react-router-dom";
//   !!! First step
export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(true);
  //   ***  animalId will be used
  const { animalId } = useParams();
  const history = useHistory();
  
  //   !!!  Third Step
  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId);
    getAnimalById(animalId)
    .then((animal) => {
        console.log("animal", animalId, "details",animal)
      setAnimal(animal);
      setIsLoading(false);
    });
  }, [animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    dischargeAnimal(animalId)
    .then(() => history.push("/animals"));
  };

  //   !!!  Second Step
  //   !!!  Fourth Step
  return (
    <section className="animal">
      <h3 className="animal__name">Animal: {animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Discharge
      </button>
    </section>
  );
};
