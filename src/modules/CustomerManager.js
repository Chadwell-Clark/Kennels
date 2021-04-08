const remoteURL = "http://localhost:5002";

  export const getCustomerById = (id) => {
    //be sure your animals have good data and related to a location and customer
   return fetch(`${remoteURL}/customers/${id}?_embed=animals`)
    .then(response => response.json())
  }

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers`)
  .then((response) => response.json());
};

export const removeCustomer = (id) => {
  return fetch(`${remoteURL}/customers/${id}`, {
    method: "DELETE",
  })
  .then((result) => result.json());
};

export const addCustomer = (newCustomer) => {
  return fetch(`${remoteURL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCustomer),   
  }).then((response)=> response.json());
}
