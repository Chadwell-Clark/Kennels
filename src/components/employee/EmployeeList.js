import React, { useState, useEffect } from "react";
import { EmployeeCard } from "./EmployeeCard";
import { getAllEmployees, terminateEmployee } from "../../modules/EmployeeManager";

export const EmployeeList = () => {
  //  ***  set the initial state to an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    //   ***  When the data comes back from API
    //   ***   use setEmployees to update state
    return getAllEmployees()
    .then((employeesFromAPI) => {
      console.log(employeesFromAPI);
      setEmployees(employeesFromAPI);
    });
  };

const deleteEmployee = (id) => {
    terminateEmployee(id)
    .then(() => getAllEmployees()
    .then(setEmployees));
}

  //   ***  Get employees from the API on component's first render
  useEffect(() => {
    getEmployees();
  }, []);

  //   ***  Use map() to loop the employee arra to show list of employee cards
  return (
    <div className="container-cards">
      {employees.map((employee) => (
        <EmployeeCard 
        employee={employee} 
        key={employee.id} 
        deleteEmployee={deleteEmployee} />
      ))}
    </div>
  );
};
