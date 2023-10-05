import React from "react";

const Customer = () => {
  let customers = [
    {
      id: 1,
      name: "Customer 1",
      image: require("../../images/view1.jpg"),
      title: "Trade",
      projects: ["Blablabla", "Blablabla", "Blablabla", "Blablabla"],
    },
    {
      id: 2,
      name: "Customer 2",
      image: require("../../images/view2.jpg"),
      title: "Trade",
      projects: ["Blablabla", "Blablabla", "Blablabla", "Blablabla"],
    },
    {
      id: 3,
      name: "Customer 3",
      image: require("../../images/view3.jpg"),
      title: "Trade",
      projects: ["Blablabla", "Blablabla", "Blablabla", "Blablabla"],
    },
  ];
  return (
    <main className="customer">
      {customers.map((customer) => {
        return (
          <div className="customer_container" key={customer.id}>
            <img src={customer.image} alt="customer" className="customer_img" />
            <h2 className="customer_h2">{customer.name}</h2>
            <h3 className="customer_h3">{customer.title}</h3>
            {customer.projects.map((project, index) => {
              return (
                <p className="customer_p" key={index}>
                  {project}
                </p>
              );
            })}
          </div>
        );
      })}
    </main>
  );
};

export default Customer;
