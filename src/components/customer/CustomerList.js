import React, { useState, useEffect } from "react";
import {  CustomerCard } from "./CustomerCard";
import { getAllCustomers, removeOwner } from "../../modules/CustomerManager";


export const CustomerList = () => {
    //  ***  set the initial state to an empty array
    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
        //   ***  When the data comes back from API  
        //   ***   use setCustomers to update state
        return getAllCustomers()
        .then(customersFromAPI => {
            console.log(customersFromAPI)
            setCustomers(customersFromAPI)
        });
    };

    const deleteCustomer = (id) => {
      removeOwner(id)
      .then(() => getAllCustomers()
      .then(setCustomers));
    };

    //   ***  Get customers from the API on component's first render   
    useEffect(() => {
        getCustomers();

    }, []);

    //   ***  Use map() to loop the customer arra to show list of customer cards
    return(
        <div className="container-cards">
            {customers.map(customer => 
            <CustomerCard  
            customer={customer} 
            key={customer.id} 
            deleteCustomer={deleteCustomer} />)}
        </div>
    )

}