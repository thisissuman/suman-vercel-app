import React from "react";
import { motion } from "framer-motion";
import { ServerMsgAnime } from "./LoaderAnimation";
const ServerMessage = () => {
  return (
    <div>
      <motion.span variants={ServerMsgAnime} initial="from" animate="to">
        {" "}
        {">"} Starting the server...
      </motion.span>{" "}
    </div>
  );
};

export default ServerMessage;
