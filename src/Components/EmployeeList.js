import React from "react";
import { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/employees`)
    .then(response => response.json())
    .then(employeeData => setEmployees(employeeData));
  },[]);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(employee => {
          return (<Employee key={employee.id} employee={employee}/>)
        })}
        
      </section>
    </main>
  );
};

export default EmployeeList;
