const remoteURL = "http://localhost:5002";

// export const getLocationById = (id) => {
//   //be sure your animals have good data and related to a location and customer
//   return fetch(
//     `${remoteURL}/locationss/${id}?_expand=location&_expand=customer`
//   ).then((response) => response.json());
// };

export const getAllLocations = () => {
  return fetch(`${remoteURL}/locations`)
  .then((response) => response.json());
};

export const closeLocation = (id) => {
  return fetch(`${remoteURL}/locations/${id}`, {
    method: "DELETE"
  })
  .then(response => response.json())
}