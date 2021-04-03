import React, { useState, useEffect } from "react";
import { AnimalCard } from "./AnimalCard";
import { getAllAnimals } from "../../modules/AnimalManager";
;
export const AnimalList = () => {
//   ***  Initial state is empty array  ***   //
const [animals, setAnimals] = useState([]);

const getAnimals = () => {
    //   ***  After data returns from API  
    //   ***   use setAnimals to update state
    return getAllAnimals()
    .then(animalsFromAPI => {
        setAnimals(animalsFromAPI)
    });
};

//   ***  Got the animals from API on components 1st render
useEffect(() => {
    getAnimals();
}, []);

//   ***  Use map() to loop over animals array to show list  of animal cards
    return (
        <div className="container-cards">
            {animals.map(animal => <AnimalCard animal = {animal} key={animal.id} />)}
        </div>
    );
};