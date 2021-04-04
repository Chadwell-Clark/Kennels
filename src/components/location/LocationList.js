import React, { useState, useEffect } from "react";
import { LocationCard } from "./LocationCard";
import { getAllLocations } from "../../modules/LocationManager";

export const LocationList = () => {
  //  ***  set the initial state to an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    //   ***  When the data comes back from API
    //   ***   use setLocations to update state
    return getAllLocations().then((locationsFromAPI) => {
      console.log(locationsFromAPI);
      setLocations(locationsFromAPI);
    });
  };

  //   ***  Get locations from the API on component's first render
  useEffect(() => {
    getLocations();
  }, []);

  //   ***  Use map() to loop the location arra to show list of location cards
  return (
    <div className="container-cards">
      {locations.map((location) => (
        <LocationCard location={location} key={location.id} />
      ))}
    </div>
  );
};
