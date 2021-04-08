import React, { useState, useEffect } from "react";
import { updateLocation, getLocationById } from "../../modules/LocationManager";
import "./LocationForm.css";
import { useParams, useHistory } from "react-router-dom";
// import { getAllEmployees } from "../../modules/EmployeeManager";
// import { getAllCustomers } from "../../modules/CustomerManager";

export const LocationEditForm = () => {
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
//   const [employees, setEmployees] = useState([]);
//   const [customers, setCustomers] = useState([]);

  const { locationId } = useParams();
  const history = useHistory();

  //   ***  Every keystroke updates the state of the location object
  const handleFieldChange = (event) => {
    const stateToChange = { ...location };
    stateToChange[event.target.id] = event.target.value;

    // if (event.target.id.includes("Id")) {
    //   editedVal = parseInt(editedVal);
    // }

    // stateToChange[event.target.id] = editedVal;
    setLocation(stateToChange);
  };
//   useEffect(() => {
//     getAllEmployees().then((employeesFromAPI) => {
//       setEmployees(employeesFromAPI);
//     });
//   }, []);

//   useEffect(() => {
//     getAllCustomers().then((customersFromAPI) => {
//       setCustomers(customersFromAPI);
//     });
//   }, []);

  const updateExistingLocation = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: locationId,
      name: location.name,
      address: location.address
    //   employeeId: employee.,
    //   customerId: location.customerId,
    };

    updateLocation(editedLocation).then(() => history.push("/locations"));
  };

  useEffect(() => {
    getLocationById(locationId).then((location) => {
      setLocation(location);
      setIsLoading(false);
    });
  }, []);

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
              value={location.name}
            />
            <label htmlFor="name">Location name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={location.address}
            />
            <label htmlFor="address">Address</label>
          </div>
          {/* <fieldset>
            <div className="form-group">
              <label htmlFor="location">Assign to location: </label>
              <select
                value={animal.locationId}
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
                value={animal.customerId}
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
              onClick={updateExistingLocation}
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
