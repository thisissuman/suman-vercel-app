import React from "react";
import Navbar from "../Base//Navbar";
import Cursor from "../Base/Cursor";
import TopCode from "../Base/TopCode";
import BottomCode from "../Base/BottomCode";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import DevTools from "./DevTools";
import Signature from "../Base/Signature";
import Footer from "../Base/Footer";
import { motion } from "framer-motion";
import {pageAnime} from "../Base/BaseAnimation";
const Skills = () => {
  return (
    <motion.div 
    variants={pageAnime}
      initial="from"
      animate="to"
    >
      <Navbar />
      <Cursor/>
      <TopCode fileName={"Skills"} />
      <div className="skills">
        <h1 className="heading">
          Techs I'm Using<span>()</span>;
        </h1>
        <div className="skillSection">
          <div className="card-list">
          <FrontEnd/>
          <BackEnd/>
          <DevTools/>
          </div>
        </div>
      </div>
      <Footer/>
      <BottomCode fileName={"Skills"} />
      <Signature/>
    </motion.div>
  );
};

export default Skills;
