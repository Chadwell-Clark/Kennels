import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalCard } from "./animal/AnimalCard";
import { CustomerCard } from "./customer/CustomerCard";
import { EmployeeCard } from "./employee/EmployeeCard";
import { LocationCard } from "./location/LocationCard";
import { TacoCard } from "./taco/TacoCard";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route path="/animals">
        <AnimalCard />
      </Route>

      {/* Render the customer card when http://localhost:3000/customers */}
      <Route path="/customers">
        <CustomerCard />
      </Route>

      {/* Render the employee card when http://localhost:3000/employees */}
      <Route path="/employees">
        <EmployeeCard />
      </Route>

      {/* Render the location card when http://localhost:3000/locations */}
      <Route path="/locations">
        <LocationCard />
      </Route>

      {/* Render the TacoCard when http://localhost:3000/tacos */}
      <Route path="/tacos">
        <TacoCard />
      </Route>
    </>
  );
};
