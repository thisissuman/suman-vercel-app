import React from "react";
import { motion } from "framer-motion";
import FirstMsg from "./FirstMsg";
import ServerMessage from "./ServerMessage";
import HtmlMsg from "./HtmlMsg";
import CssMsg from "./CssMsg";
import JavaScriptMsg from "./JavaScriptMsg";
import ReactMsg from "./ReactMsg";
import FinalMsg from "./FinalMsg";

const CommandPrompt = () => {
  return (
    <motion.div className="card">
      <div className="btns">
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
      </div>
      <br />
      <div className="tech">
        <p>
          <FirstMsg />
          <ServerMessage />
          <HtmlMsg />
          <CssMsg />
          <JavaScriptMsg />
          <ReactMsg />
          <FinalMsg />
        </p>
      </div>
    </motion.div>
  );
};

export default CommandPrompt;
