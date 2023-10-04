import React from "react";

const Employee = () => {
  let employees = [
    { name: "Islam AlZatary", image: "./employee1.jpg", job: "Web Designer" },
    { name: "Tayseer Emam", image: "./employee2.jpg", job: "Support" },
    { name: "Eman Subhi", image: "./employee3.jpg", job: "Boss man" },
    { name: "Reem Yakoub", image: "./employee4.jpg", job: "Fixer" },
  ];
  return (
    <div className="employee">
      {employees.map((employee) => {
        return (
          <div className="employee_data">
            <img
              src={employee.image}
              alt="employeeImage"
              className="employee_img"
            />
            <h2 className="employee_name">{employee.name}</h2>
            <h3 className="employee_job">{employee.job}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
