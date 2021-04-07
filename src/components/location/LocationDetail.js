import React, { useState, useEffect } from "react";
import { closeLocation, getLocationById } from "../../modules/LocationManager";
import "./LocationDetail.css";
import { useParams, useHistory } from "react-router-dom";
import {EmployeeCard} from "../employee/EmployeeCard"

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const { locationId } = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", locationId);
    getLocationById(locationId)
    .then((location) => {
      console.log("Location Object", location.employees)
      setLocation(location);
      setIsLoading(false);
    });
  }, [locationId]);

  const handleDelete = () => {
  //invoke the delete function in AnimalManger and re-direct to the animal list.
  setIsLoading(true);
  closeLocation(locationId).then(() =>
    history.push("/locations")
  );
};

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      {/* Can Map over employees and either make a component to put the employee in or
      use the employeeCard and pass in a flag that when present will keep the 
      delete button from showing via a ternary */}
      {location.employees?.map((employee) => 
      (<div key={employee.id}>{employee.name}</div>)
        // <EmployeeCard key={employee.id} locationList employee={employee} />
)}
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="location__employee">Employee: {location.employees?.name}</div> */}
      {/* <div className="location__employee">Employee: {location.employees?.name}</div> */}
      {/* <div className="location__owner">Customer: {location.customer?.name}</div> */}
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Close Location
      </button>
    </section>
  );
};
