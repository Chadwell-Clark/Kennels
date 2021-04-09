import React from "react"
import "./Customer.css"
import { Link } from "react-router-dom";

// export const CustomerCard = ({ customer }) => (
//   <section className="customer">
//     <h3 className="customer__name">{customer.name}</h3>
//     <div className="customer__address">Address: {customer.address}</div>
//     <div className="customer__phone">Phone: {customer.phone}</div>
//   </section>
// );

 export const CustomerCard = ({ customer, deleteCustomer }) => {
   return (
     <div className="card">
       <div className="card-content">
         {/* <picture>
           <img src={require("./dog.svg")} alt="My Dog" />
         </picture> */}
         <h3>
           Name: <span className="card-customerName">{customer.name}</span>
         </h3>
         <p className="customer__address">Address: {customer.address}</p>
         {/* <p>Address: {customer.address}</p> */}
         <p className="customer__phone">Phone: {customer.phone}</p>
         <p className="customer__email">Email: {customer.email}</p>
         <Link to={`/customers/${customer.id}`}>
           <button>Details</button>
         </Link>
         <Link to={`/customers/${customer.id}/edit`}>
           <button>Edit</button>
         </Link>
         <button type="button" onClick={() => deleteCustomer(customer.id)}>
           Remove Owner
         </button>
       </div>
     </div>
   );
 };