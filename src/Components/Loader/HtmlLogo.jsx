import React from "react";
import {motion} from "framer-motion";
import {htmlLogoAnime} from "./LoaderAnimation";
const HtmlLogo = () => {
  return (
    <div>
      <motion.img
        src="/images/html.svg"
        alt=""
        className="html"
        variants={ htmlLogoAnime }
        initial="from"
        animate="to"
      />
    </div>
  );
};

export default HtmlLogo;
