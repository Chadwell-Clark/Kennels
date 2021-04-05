import React, { useState, useEffect } from "react";
import { AnimalCard } from "./AnimalCard";
import { getAllAnimals, dischargeAnimal } from "../../modules/AnimalManager";
;
//   !!   First:  Start with empty array
export const AnimalList = () => {
//   ***  Initial state is empty array  ***   //
const [animals, setAnimals] = useState([]);

//    !! Fourth: takes time  to fetch from DOM
const getAnimals = () => {
    //   ***  After data returns from API  
    //   ***   use setAnimals to update state
    return getAllAnimals()
    .then(animalsFromAPI => {
        setAnimals(animalsFromAPI)
    });
};
//   ***  Delete animals fro database
const deleteAnimal = (id) => {
  dischargeAnimal(id)
  .then(() => getAllAnimals()
  .then(setAnimals));
};

//   !!   Third:  calls getAnimals()
//   ***  Got the animals from API on components 1st render
useEffect(() => {
    getAnimals();
}, []);
//   !! Second:  Array is empty so renders nothing to DOM
//   !! Fifth:  Once the data is fetched from database- rerender with new info
//   ***  Use map() to loop over animals array to show list  of animal cards
    return (
        <div className="container-cards">
            {animals.map(animal => 
            <AnimalCard 
            animal={animal} 
            key={animal.id} 
            deleteAnimal={deleteAnimal}/>)}
        </div>
    );
};

// const deleteAnimal = (id) => {
//     dischargeAnimal(id)
//     .then(() => getAllAnimals()
//     .then(setAnimals))
// }