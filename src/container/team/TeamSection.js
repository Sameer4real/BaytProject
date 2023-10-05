import React from "react";

import Employee from "./Employee";

const TeamSection = () => {
  return (
    <main className="team" id="team">
      <h2>OUR TEAM</h2>
      <h4 className="employee_job">Meet the team - our office rats:</h4>

      <Employee />
    </main>
  );
};

export default TeamSection;
