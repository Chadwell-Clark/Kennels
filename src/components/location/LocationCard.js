import React from "react";
import  "./Location.css";

// export const LocationCard = ({location}) => (
//   <section className="location">
//     <h3 className="location__name">{location.name}</h3>
//       <div className="location__address"> Address: {location.address} </div>
//   </section>
// );

export const LocationCard = ({ location, deleteLocation }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
        </picture>
        <h3>
          Name: <span className="card-locationName">{location.name}</span>
        </h3>
        <p>Address: {location.address}</p>
        <button type="button" onClick={() => deleteLocation(location.id)}>
          Close Location
        </button>
      </div>
    </div>
  );
};