import React from "react";
import {motion} from "framer-motion";
import { bottomCodeAnime } from "./BaseAnimation";
const BottomCode = (props) => {
  return (
    <motion.div className="code"
    variants={bottomCodeAnime}
    initial="from"
    animate="to"
    >
        <pre>
          <pre>
            <h3>
              {"  "}
              <span className="tag">{"</div>"}</span>
            </h3>
          </pre>
          <h3>{"  "}{")"}</h3>
          <h3>{"}"}</h3>
          <h3>export default <span className="file">{props.fileName}</span>;</h3>
        </pre>
    </motion.div>
  );
};

export default BottomCode;
