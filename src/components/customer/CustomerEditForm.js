import React, { useState, useEffect } from "react";
import { updateCustomer, getCustomerById } from "../../modules/CustomerManager";
import "./CustomerForm.css";
import { useParams, useHistory } from "react-router-dom";
// import { getAllLocations } from "../../modules/LocationManager";
// import { getAllCustomers } from "../../modules/CustomerManager";

export const CustomerEditForm = () => {
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(false);
//   const [locations, setLocations] = useState([]);
//   const [customers, setCustomers] = useState([]);

  const { customerId } = useParams();
  const history = useHistory();

  //   ***  Every keystroke updates the state of the customer object
  const handleFieldChange = (event) => {
    const stateToChange = { ...customer };
    stateToChange[event.target.id] = event.target.value;
    // let editedVal = event.target.value;

    // if (event.target.id.includes("Id")) {
    //   editedVal = parseInt(editedVal);
    // }

    // stateToChange[event.target.id] = editedVal;
    setCustomer(stateToChange);
  };
//   useEffect(() => {
//     getAllLocations().then((locationsFromAPI) => {
//       setLocations(locationsFromAPI);
//     });
//   }, []);

//   useEffect(() => {
//     getAllCustomers().then((customersFromAPI) => {
//       setCustomers(customersFromAPI);
//     });
//   }, []);
  const updateExistingCustomer = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedCustomer = {
      id: customerId,
      name: customer.name,
      address: customer.address,
      phone: customer.phone,
      email: customer.email,
    //   locationId: customer.locationId,
    //   customerId: customer.customerId,
    };

    updateCustomer(editedCustomer).then(() => history.push("/customers"));
  };

  useEffect(() => {
    getCustomerById(customerId).then((customer) => {
      setCustomer(customer);
      setIsLoading(false);
    });
  }, [customerId]);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={customer.name}
            />
            <label htmlFor="name">Customer name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={customer.address}
            />
            <label htmlFor="address">Address</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="phone"
              value={customer.phone}
            />
            <label htmlFor="phone">Phone</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="email"
              value={customer.email}
            />
            <label htmlFor="email">Email</label>
          </div>
          {/* <fieldset>
            <div className="form-group">
              <label htmlFor="location">Assign to location: </label>
              <select
                value={customer.locationId}
                name="locationId"
                id="locationId"
                onChange={handleFieldChange}
                className="form-control"
              >
                <option value="0">Select a location</option>
                {locations.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="customerId">Customer: </label>
              <select
                value={customer.customerId}
                name="customer"
                id="customerId"
                onChange={handleFieldChange}
                className="form-control"
              >
                <option value="0">Select a customer</option>
                {customers.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset> */}
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingCustomer}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
