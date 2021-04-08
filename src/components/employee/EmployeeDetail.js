import React, { useState, useEffect } from "react";
import { terminateEmployee, getEmployeeById } from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";
import { useParams, useHistory } from "react-router-dom";
// import { EmployeeCard } from "../employee/EmployeeCard";

export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const { employeeId } = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", employeeId);
    getEmployeeById(employeeId)
    .then((employee) => {
      console.log("employee Object", employee.locations);
      setEmployee(employee);
      setIsLoading(false);
    });
  }, [employeeId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    terminateEmployee(employeeId)
    .then(() => history.push("/employees"));
  };

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__address">{employee.address}</div>
      <h4>Location:</h4>
      {/* Can Map over employees and either make a component to put the employee in or
      use the employeeCard and pass in a flag that when present will keep the 
      delete button from showing via a ternary */}
      {employee.locations?.map(
        (location) => (
          <>
            <div key={location.id}>{location.name}</div>
          </>
        ) )}
        {/* // <EmployeeCard key={employee.id} EmployeeList employee={employee} />
      
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="Employee__employee">Employee: {Employee.employees?.name}</div> */}
      {/* <div className="Employee__employee">Employee: {Employee.employees?.name}</div> */}
      {/* <div className="Employee__owner">Employee: {Employee.Employee?.name}</div> */}
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Terminate Employee
      </button>
    </section>
  );
};
