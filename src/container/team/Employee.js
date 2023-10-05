import React from "react";

const Employee = () => {
  let employees = [
    {
      name: "Islam AlZatary",
      image: "./images/employee1.jpg",
      job: "Web Designer",
    },
    {
      name: "Tayseer Emam",
      image: "./images/employee2.jpg",
      job: "Support",
    },
    {
      name: "Eman Subhi",
      image: "./images/employee3.jpg",
      job: "Boss man",
    },
    { name: "Reem Yakoub", image: "./images/sahara.png", job: "Fixer" },
  ];
  return (
    <div className="employee">
      {employees.map((employee) => {
        console.log(employee.image, "lol");
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
