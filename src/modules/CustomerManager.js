const remoteURL = "http://localhost:5002"

//   export const getCustomerById = (id) => {
//     //be sure your animals have good data and related to a location and customer
//    return fetch(`${remoteURL}/customers/${id}?_expand=location&_expand=customer`)
//     .then(response => response.json())
//   }

  export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(response => response.json())
  }

  export const removeOwner = (id) => {
      return fetch(`${remoteURL}/customers/${id}`, {
    method: "DELETE"
  })
  .then(result => result.json())
}
  