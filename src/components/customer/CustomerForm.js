import React, { useState} from "react";
import { useHistory } from "react-router";
import { addCustomer } from "../../modules/CustomerManager";
import "./CustomerForm.css";

export const CustomerForm = () => {
  // State will contain both animal data as well as an isLoading flag.
  // Define the initial state of the form inputs with useState()

  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: ""
  });

//   const [isLoading, setIsLoading] = useState(false);

  // you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
//   const [locations, setLocations] = useState([]);
//   const [customers, setCustomers] = useState([]);

  const history = useHistory();

  //when a field changes, update state. The return will re-render and display based on the values in state
  // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
  //Controlled component

  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
    const newCustomer = { ...customer };
    let selectedVal = event.target.value;
    // forms always provide values as strings. But we want to save the ids as numbers.
    if (event.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal);
    }
    /* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
    newCustomer[event.target.id] = selectedVal;
    // update state
    setCustomer(newCustomer);
  };

//   useEffect(() => {
//     //load location data and setState
//   }, []);

//   useEffect(() => {
//     //load customer data and setState
//   }, []);

  const handleClickSaveAnimal = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    // const locationId = animal.locationId;
    // const customerId = animal.customerId;

    // if (locationId === 0 || customerId === 0) {
    //   window.alert("Please select a location and a customer");
    // } else {
      //invoke addAnimal passing animal as an argument.
      //once complete, change the url and display the animal list
      addCustomer(customer)
      .then(() => history.push("/customers"));
    // }
  };

  return (
    <form className="customerForm">
      <h2 className="animalForm__title">New Customer</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Customer name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Customer name"
            value={customer.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="address">Customer address:</label>
          <input
            type="text"
            id="address"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Customer address"
            value={customer.address}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="phone">Customer phone:</label>
          <input
            type="text"
            id="phone"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Customer phone"
            value={customer.phone}
          />
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={handleClickSaveAnimal}>
        Save New Customer
      </button>
    </form>
  );
};
