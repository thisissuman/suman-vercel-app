import React from "react";
import { motion } from "framer-motion";
import { htmlMsgAnime } from "./LoaderAnimation";
const HtmlMsg = () => {
  return (
    <div>
      <motion.p variants={htmlMsgAnime} initial="from" animate="to">
        {">"} HTML loaded !✅{" "}
      </motion.p>{" "}
    </div>
  );
};

export default HtmlMsg;
