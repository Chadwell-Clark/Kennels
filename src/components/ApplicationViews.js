import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerDetail } from "./customer/CustomerDetail";
import { CustomerList } from "./customer/CustomerList";
import { EmployeeList } from "./employee/EmployeeList";
import { LocationList } from "./location/LocationList";
import { LocationForm } from "./location/LocationForm";
import { AnimalForm } from "./animal/AnimalForm";
import {CustomerForm} from "./customer/CustomerForm";
import { EmployeeForm } from "./employee/EmployeeForm";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { TacoCard } from "./taco/TacoCard";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { AnimalEditForm } from "./animal/AnimalEditForm";
import { LocationEditForm } from "./location/LocationEditForm";
import { CustomerEditForm } from "./customer/CustomerEditForm";




export const ApplicationViews = () => {
  const isAuthenticated = () =>
    sessionStorage.getItem("kennel_customer") !== null;
  return (
    <>
      {/* Route returns one thing to the location specified by path */}
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        {isAuthenticated() ? <AnimalList /> : <Redirect to="/login" />}
      </Route>
      {/* Render the animal details when http://localhost:3000/animals/(\d+) */}
      {/* (\d+) is the route parameter digit(s) via regex */}
      <Route exact path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>
      {/* Render the AnimalForm when http://localhost:3000/animals/create */}
      <Route path="/animals/create">
        <AnimalForm />
      </Route>
      <Route path="/animals/:animalId(\d+)/edit">
        <AnimalEditForm />
      </Route>
      {/* Render the customer card when http://localhost:3000/customers */}
      <Route exact path="/customers">
        <CustomerList />
      </Route>
      {/* Render the customer card when http://localhost:3000/customers */}
      <Route exact path="/customers/:customerId(\d+)">
        <CustomerDetail />
      </Route>
      {/* Render CustomerForm when http://localhost:3000/customers/create */}
      <Route path="/customers/create">
        <CustomerForm />
      </Route>
      {/* Render the customer card when http://localhost:3000/customers */}
      <Route path="/customers/:customerId(\d+)/edit">
        <CustomerEditForm />
      </Route>
      {/* Render the employee card when http://localhost:3000/employees */}
      <Route exact path="/employees">
        <EmployeeList />
      </Route>
      {/* Render the employee card when http://localhost:3000/employees */}
      <Route exact path="/employees/:employeeId(\d+)">
        <EmployeeDetail />
      </Route>
      {/* Render EmployeeForm when http://localhost:3000/employee/create */}
      <Route path="/employees/create">
        <EmployeeForm />
      </Route>
      {/* Render the location card when http://localhost:3000/locations */}
      <Route exact path="/locations">
        <LocationList />
      </Route>
      {/* Render the location form when http://localhost:3000/locations/create */}
      <Route exact path="/locations/create">
        <LocationForm />
      </Route>
      {/* Render the location details when http://localhost:3000/locations/(\d+) */}
      <Route exact path="/locations/:locationId(\d+)">
        <LocationDetail />
      </Route>
      {/* Render the location details when http://localhost:3000/locations/(\d+)/edit */}
      <Route exact path="/locations/:locationId(\d+)/edit">
        <LocationEditForm />
      </Route>
      {/* Render the TacoCard when http://localhost:3000/tacos */}
      <Route path="/tacos">
        <TacoCard />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>
    </>
  );
};
