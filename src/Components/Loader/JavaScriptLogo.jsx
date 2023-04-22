import React from "react";
import {motion} from "framer-motion";
import {jsLogoAnime} from "./LoaderAnimation";
const JavaScriptLogo = () => {
  return (
    <div>
      <motion.img
        src="/images/javascript.svg"
        alt=""
        className="js"
        variants={ jsLogoAnime }
        initial="from"
        animate="to"
      />
    </div>
  );
};

export default JavaScriptLogo;
