import React, { useState, useEffect } from "react";
import { LocationCard } from "./LocationCard";
import { closeLocation, getAllLocations } from "../../modules/LocationManager";
import { useHistory } from "react-router";

export const LocationList = () => {
  //  ***  set the initial state to an empty array
  const [locations, setLocations] = useState([]);

  const history =useHistory();

  const getLocations = () => {
    //   ***  When the data comes back from API
    //   ***   use setLocations to update state
    return getAllLocations().then((locationsFromAPI) => {
      console.log(locationsFromAPI);
      setLocations(locationsFromAPI);
    });
  };

const deleteLocation = (id) => {
    closeLocation(id)
    .then(() => getAllLocations()
    .then(setLocations));
};

  //   ***  Get locations from the API on component's first render
  useEffect(() => {
    getLocations();
  }, []);

  //   ***  Use map() to loop the location arra to show list of location cards
  return (
    <>
      <section className="section-content">
        <button
          type="button"
          id="addBtn"
          className="btn"
          onClick={() => {
            history.push("/locations/create");
          }}
        >
          Add New Location
        </button>
      </section>
      <div className="container-cards">
        {locations.map((location) => (
          <LocationCard
            location={location}
            key={location.id}
            deleteLocation={deleteLocation}
          />
        ))}
      </div>
    </>
  );
};
