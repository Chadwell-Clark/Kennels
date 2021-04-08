const remoteURL = "http://localhost:5002";

export const getLocationById = (id) => {
  //be sure your animals have good data and related to a location and customer
  // return fetch(`${remoteURL}/locations/${id}?_expand=location&_expand=customer`)
  return fetch(`${remoteURL}/locations/${id}?_embed=employees`)
  .then(response => response.json());
};

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

export const addLocation = (newLocation) => {
  return fetch(`${remoteURL}/locations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newLocation),
  }).then((response) => response.json());
};