import React from "react";
import { motion } from "framer-motion";
import { finalMsgAnime } from "./LoaderAnimation";
const FinalMsg = () => {
  return (
    <div>
      <motion.p variants={finalMsgAnime} initial="from" animate="to">
        {">"} You can now view suman-portfolio in the browser.✌🏻{" "}
      </motion.p>
    </div>
  );
};

export default FinalMsg;
