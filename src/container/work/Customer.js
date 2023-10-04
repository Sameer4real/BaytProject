import React from "react";

const Customer = () => {
  let customers = [
    {
      name: "Customer 1",
      image: "./view1.jpg",
      title: "Trade",
      projects: ["Blablabla", "Blablabla", "Blablabla", "Blablabla"],
    },
    {
      name: "Customer 2",
      image: "./view2.jpg",
      title: "Trade",
      projects: ["Blablabla", "Blablabla", "Blablabla", "Blablabla"],
    },
    {
      name: "Customer 3",
      image: "./view3.jpg",
      title: "Trade",
      projects: ["Blablabla", "Blablabla", "Blablabla", "Blablabla"],
    },
  ];
  return (
    <main className="customer">
      {customers.map((customer) => {
        return (
          <div className="customer_container">
            <img src={customer.image} alt="customer" className="customer_img" />
            <h2 className="customer_h2">{customer.name}</h2>
            <h3 className="customer_h3">{customer.title}</h3>
            {customer.projects.map((project) => {
              return <p className="customer_p">{project}</p>;
            })}
          </div>
        );
      })}
    </main>
  );
};

export default Customer;
