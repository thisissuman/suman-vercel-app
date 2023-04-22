import React from "react";
import { motion } from "framer-motion";
import { cssMsgAnime } from "./LoaderAnimation";
const CssMsg = () => {
  return (
    <div>
      <motion.p variants={cssMsgAnime} initial="from" animate="to">
        {">"} CSS loaded !✅{" "}
      </motion.p>{" "}
    </div>
  );
};

export default CssMsg;
