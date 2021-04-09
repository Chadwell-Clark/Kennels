import React, {useState} from "react";
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
import { EmployeeEditForm } from "./employee/EmployeeEditForm";





export const ApplicationViews = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("kennel_customer") !== null
  );

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null);
  };

  return (
    <>
      {/* Route returns one thing to the location specified by path */}
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>
      {/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
      </Route>
      {/* Render the animal details when http://localhost:3000/animals/(\d+) */}
      {/* (\d+) is the route parameter digit(s) via regex */}
      <Route exact path="/animals/:animalId(\d+)">
        {isAuthenticated ? <AnimalDetail /> : <Redirect to="/login" />}
      </Route>
      {/* Render the AnimalForm when http://localhost:3000/animals/create */}
      <Route path="/animals/create">
        {isAuthenticated ? <AnimalForm /> : <Redirect to="/login" />}
      </Route>
      <Route path="/animals/:animalId(\d+)/edit">
        {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
      </Route>
      {/* Render the customer card when http://localhost:3000/customers */}
      <Route exact path="/customers">
        {isAuthenticated ? <CustomerList /> : <Redirect to="/login" />}
      </Route>
      {/* Render the customer card when http://localhost:3000/customers */}
      <Route exact path="/customers/:customerId(\d+)">
        {isAuthenticated ? <CustomerDetail /> : <Redirect to="/login" />}
      </Route>
      {/* Render CustomerForm when http://localhost:3000/customers/create */}
      <Route path="/customers/create">
        {isAuthenticated ? <CustomerForm /> : <Redirect to="/login" />}
      </Route>
      {/* Render the customer card when http://localhost:3000/customers */}
      <Route path="/customers/:customerId(\d+)/edit">
        {isAuthenticated ? <CustomerEditForm /> : <Redirect to="/login" />}
      </Route>
      {/* Render the employee card when http://localhost:3000/employees */}
      <Route exact path="/employees">
        {isAuthenticated ? <EmployeeList /> : <Redirect to="/login" />}
      </Route>
      {/* Render the employee card when http://localhost:3000/employees */}
      <Route exact path="/employees/:employeeId(\d+)">
        {isAuthenticated ? <EmployeeDetail /> : <Redirect to="/login" />}
      </Route>
      {/* Render EmployeeForm when http://localhost:3000/employee/create */}
      <Route path="/employees/create">
        {isAuthenticated ? <EmployeeForm /> : <Redirect to="/login" />}
      </Route>
      {/* Render the employee card when http://localhost:3000/employees(\d+)/edit */}
      <Route exact path="/employees/:employeeId(\d+)/edit">
        {isAuthenticated ? <EmployeeEditForm /> : <Redirect to="/login" />}
      </Route>
      {/* Render the location card when http://localhost:3000/locations */}
      <Route exact path="/locations">
        {isAuthenticated ? <LocationList /> : <Redirect to="/login" />}
      </Route>
      {/* Render the location form when http://localhost:3000/locations/create */}
      <Route exact path="/locations/create">
        {isAuthenticated ? <LocationForm /> : <Redirect to="/login" />}
      </Route>
      {/* Render the location details when http://localhost:3000/locations/(\d+) */}
      <Route exact path="/locations/:locationId(\d+)">
        {isAuthenticated ? <LocationDetail /> : <Redirect to="/login" />}
      </Route>
      {/* Render the location details when http://localhost:3000/locations/(\d+)/edit */}
      <Route exact path="/locations/:locationId(\d+)/edit">
        {isAuthenticated ? <LocationEditForm /> : <Redirect to="/login" />}
      </Route>
      {/* Render the TacoCard when http://localhost:3000/tacos */}
      <Route path="/tacos">
        <TacoCard />
      </Route>

      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>
    </>
  );
};
