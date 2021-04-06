import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail";
// import { CustomerCard } from "./customer/CustomerCard";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";

// import { EmployeeCard } from "./employee/EmployeeCard";
import { LocationDetail } from "./location/LocationDetail";
import { TacoCard } from "./taco/TacoCard";

export const ApplicationViews = () => {
  return (
    <>
      {/* Route returns one thing to the location specified by path */}
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Render the animal list when http://localhost:3000/animals */}
      <Route  exact path="/animals">
        <AnimalList />
      </Route>
      {/* Render the animal details when http://localhost:3000/animals/(\d+) */}
      {/* (\d+) is the route parameter */}
      <Route path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>
      {/* Render the customer card when http://localhost:3000/customers */}
      <Route path="/customers">
        <CustomerList />
      </Route>
      {/* Render the employee card when http://localhost:3000/employees */}
      <Route path="/employees">
        <EmployeeList />
      </Route>
      {/* Render the location card when http://localhost:3000/locations */}
      <Route exact path="/locations">
        <LocationList />
      </Route>
      {/* Render the location details when http://localhost:3000/locations/(\d+) */}
      <Route path="/locations/:locationId(\d+)">
        <LocationDetail />
      </Route>
      {/* Render the TacoCard when http://localhost:3000/tacos */}
      <Route path="/tacos">
        <TacoCard />
      </Route>
    </>
  );
};
