import React from "react";
import { motion } from "framer-motion";
import { topCodeAnime } from "./BaseAnimation";
const TopCode = (props) => {
  return (
    <motion.div
      className="code"
      variants={topCodeAnime}
      initial="from"
      animate="to"
    >
      <pre>
        <h3>
          import <span className="variable">React</span> from{" "}
          <span className="string">"react"</span>;
        </h3>
        <h3>
          const <span className="file">{props.fileName}</span> =(){"=> {"}
        </h3>
        <h3> return(</h3>
        <pre>
          <h3>
            {"  "}
            <span className="tag">{"<div>"}</span>
          </h3>
        </pre>
      </pre>
    </motion.div>
  );
};

export default TopCode;
