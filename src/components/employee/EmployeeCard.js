import React from "react";
import "./Employee.css"

// export const EmployeeCard = ({employee}) => (
//   <section className="employee">
//     <h3 className="employee__name">{employee.name}</h3>
//         <div className="customer__address">Address: {employee.address}</div>

//   </section>
// );

export const EmployeeCard = ({ employee, deleteEmployee }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
        </picture>
        <h3>
          Name: <span className="card-employeeName">{employee.name}</span>
        </h3>
        <p>Address: {employee.address}</p>
        <button type="button" onClick={() => deleteEmployee(employee.id)}>
          Terminate Employee
        </button>
      </div>
    </div>
  );
};