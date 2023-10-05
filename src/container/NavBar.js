import React from "react";

import { FaHome } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  return (
    <main className="nav">
      <section className="nav_left">
        <a
          className="logo"
          href="https://media.giphy.com/media/mpB75VlHUWWmIX3WbN/giphy.gif"
          target="blank"
        >
          {" "}
          <FaHome style={{ color: "white" }} />
          Logo
        </a>

        <a href="#team" className="options">
          Team
        </a>

        <a href="#work" className="options">
          Work
        </a>

        <a className="options" href="#">
          Price
        </a>
        <a href="#contact" className="options">
          Contact
        </a>
        <a className="options" href="#">
          Dropdown
          <BiSolidDownArrow />
        </a>
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
