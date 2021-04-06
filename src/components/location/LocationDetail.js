import React, { useState, useEffect } from "react";
import { getLocationById } from "../../modules/LocationManager";
import "./LocationDetail.css";
import { useParams, useHistory } from "react-router-dom";
import {EmployeeCard} from "../employee/EmployeeCard"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });

  const { locationId } = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", locationId);
    getLocationById(locationId)
    .then((location) => {
      console.log("Location Object", location)
      setLocation(location);
    });
  }, [locationId]);

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      {/* {location.employees?.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)} */}
      {/* What's up with the question mark???? See below.*/}
      <div className="location__employee">Employee: {location.employee?.name}</div>
      {/* <div className="location__owner">Customer: {location.customer?.name}</div> */}
    </section>
  );
};
