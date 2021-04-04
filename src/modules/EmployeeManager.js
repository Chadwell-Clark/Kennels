const remoteURL = "http://localhost:5002";

// export const getEmployeeById = (id) => {
//   //be sure your animals have good data and related to a location and customer
//   return fetch(
//     `${remoteURL}/employees/${id}?_expand=location&_expand=customer`
//   ).then((response) => response.json());
// };

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
  .then((response) => response.json());
};
