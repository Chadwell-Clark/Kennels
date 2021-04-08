const remoteURL = "http://localhost:5002";

export const getEmployeeById = (id) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(
    `${remoteURL}/employees/${id}?_expand=location`)
    .then((response) => response.json());
};

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`)
  .then((response) => response.json());
};

export const terminateEmployee = (id) => {
  return fetch(`${remoteURL}/employees/${id}`, {
    method: "DELETE"
  })
  .then(response => response.json()) 
}

export const addEmployee = (newEmployee) => {
  return fetch(`${remoteURL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newEmployee)
  })
  .then(response => response.json())
}
