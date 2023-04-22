import React from "react";
import {motion} from "framer-motion";
import {cssLogoAnime} from "./LoaderAnimation";
const CssLogo = () => {
  return (
    <div>
      <motion.img
        src="/images/css.svg"
        alt=""
        className="css"
        variants={cssLogoAnime}
        initial="from"
        animate="to"
      />
    </div>
  );
};

export default CssLogo;
