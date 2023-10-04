import React from "react";

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoGooglePlus,
  BiLogoInstagram,
} from "react-icons/bi";

const FollowUs = () => {
  return (
    <main className="followUs">
      <h3>Follow Us</h3>
      <div className="channels">
        <button className="channel">
          <BiLogoFacebook
            style={{ color: "white", width: "15px", height: "15px" }}
          />
        </button>
        <button className="channel">
          <BiLogoTwitter
            style={{ color: "white", width: "15px", height: "15px" }}
          />
        </button>
        <button className="channel">
          <BiLogoGooglePlus
            style={{ color: "white", width: "15px", height: "15px" }}
          />
        </button>
        <button className="channel">
          <BiLogoInstagram
            style={{ color: "white", width: "15px", height: "15px" }}
          />
        </button>
      </div>
    </main>
  );
};

export default FollowUs;
