import React from "react";
import { motion } from "framer-motion";
import CommandPrompt from "./CommandPrompt";
import LogoSection from "./LogoSection";
import { LoaderPageAnime } from "./LoaderAnimation";
const Loader = () => {
  return (
    <motion.div className="loader" variant={LoaderPageAnime} initial="from" animate="to">
      <CommandPrompt />
      <LogoSection />
    </motion.div>
  );
};

export default Loader;
