import React from "react";

import Customer from "./Customer";

const OurWorkSection = () => {
  return (
    <main className="ourwork">
      <div className="ourwork_header">
        <h1 className="ourwork_h1">Our Work</h1>
        <p className="ourwork_p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          nobis sed consectetur provident culpa, expedita quibusdam dolorum
          exercitationem distinctio voluptatum molestiae ullam earum porro
          aliquid nihil iusto corrupti itaque rerum? exercitationem distinctio
          voluptatum molestiae ullam earum porro aliquid nihil iusto corrupti
          itaque rerum?
        </p>
      </div>

      <Customer />
      <div className="plus">+</div>
    </main>
  );
};

export default OurWorkSection;
