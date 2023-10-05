import React from "react";

const Employee = () => {
  let employees = [
    {
      id: 1,
      name: "Islam AlZatary",
      image: require("../../images/employee1.jpg"),
      job: "Web Designer",
    },
    {
      id: 2,
      name: "Tayseer Emam",
      image: require("../../images/employee2.jpg"),
      job: "Support",
    },
    {
      id: 3,
      name: "Eman Subhi",
      image: require("../../images/employee3.jpg"),
      job: "Boss man",
    },
    {
      id: 4,
      name: "Reem Yakoub",
      image: require("../../images/employee4.jpg"),
      job: "Fixer",
    },
  ];
  return (
    <div className="employee">
      {employees.map((employee) => {
        return (
          <div className="employee_data" key={employee.id}>
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
