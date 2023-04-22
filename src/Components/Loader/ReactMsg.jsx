import React from "react";
import { motion } from "framer-motion";
import { reactMsgAnime } from "./LoaderAnimation";
const ReactMsg = () => {
  return (
    <div>
      <motion.p variants={reactMsgAnime} initial="from" animate="to">
        {">"} React Rendered !✅{" "}
      </motion.p>{" "}
    </div>
  );
};

export default ReactMsg;
