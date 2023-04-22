import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {navbarAnime} from "./BaseAnimation";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>
            {" "}
            <span>{"<"}</span>
            {"SuMaN"}
            <span>{"/>"}</span>
        </h1>
      </div>
      <motion.div
      variants={navbarAnime}
        initial="from"
        animate="to"
      >
        <nav>
          <ol>
            <li>
              <NavLink activeclassname="active" exact="true" to="/">
                <span>[0].</span>Home
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" exact="true" to="/About">
                <span>[1].</span>About
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" exact="true" to="/Skills">
                <span>[2].</span>Skills
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" exact="true" to="/Contact">
                <span>[3].</span>Contact
              </NavLink>
            </li>
          </ol>
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
