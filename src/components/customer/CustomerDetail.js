import React, { useState, useEffect } from "react";
import { removeCustomer, getCustomerById } from "../../modules/CustomerManager";
import "./CustomerDetail.css";
import { useParams, useHistory } from "react-router-dom";
// import { EmployeeCard } from "../employee/EmployeeCard";

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const { customerId } = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", customerId);
    getCustomerById(customerId)
    .then((customer) => {
      console.log("customer Object", customer.animals);
      setCustomer(customer);
      setIsLoading(false);
    });
  }, [customerId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    removeCustomer(customerId)
    .then(() => history.push("/customers"));
  };

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__address">{customer.address}</div>
      <h4>Animals:</h4>
      {/* Can Map over employees and either make a component to put the employee in or
      use the employeeCard and pass in a flag that when present will keep the 
      delete button from showing via a ternary */}
      {customer.animals?.map((animal) => (
          <>
            <div key={animal.id}>{animal.name}</div>
          </>
        )
        // <EmployeeCard key={employee.id} customerList employee={employee} />
      )}
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="customer__employee">Employee: {customer.employees?.name}</div> */}
      {/* <div className="customer__employee">Employee: {customer.employees?.name}</div> */}
      {/* <div className="customer__owner">Customer: {customer.customer?.name}</div> */}
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Remove Customer
      </button>
    </section>
  );
};
