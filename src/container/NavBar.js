import React from "react";

import { FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  return (
    <main className="nav">
      <section className="nav_left">
        <button className="logo">
          {" "}
          <FaHome style={{ color: "white" }} />
          Logo
        </button>
        <button className="options">Team</button>
        <button className="options">Work</button>
        <button className="options">Price</button>
        <button className="options">Contact</button>
        <button className="options">
          Dropdown
          <BiSolidDownArrow />
        </button>
      </section>
      <section className="nav_right">
        <button className="menu">
          <RxHamburgerMenu style={{ color: "white" }} />
        </button>
        <button className="search">
          <AiOutlineSearch
            style={{ color: "white", height: "17px", width: "17px" }}
          />
        </button>
      </section>
    </main>
  );
};

export default NavBar;
