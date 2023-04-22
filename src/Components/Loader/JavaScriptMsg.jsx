import React from "react";
import {motion} from "framer-motion";
import { jsMsgAnime } from "./LoaderAnimation";
const JavaScriptMsg = () => {
  return (
    <div>
    <motion.p variants={jsMsgAnime} initial="from" animate="to">
        {">"} JavaScript loaded !✅{" "}
      </motion.p>{" "}
    </div>
  );
};

export default JavaScriptMsg;
