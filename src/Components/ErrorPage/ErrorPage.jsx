import React from "react";
import Navbar from "../Base/Navbar";
import Cursor from "../Base/Cursor";
import TopCode from "../Base/TopCode";
import BottomCode from "../Base/BottomCode";
import Signature from "../Base/Signature";
import Footer from "../Base/Footer";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import {pageAnime} from "../Base/BaseAnimation";
const ErrorPage = () => {
  return (
    <motion.div
    variants={pageAnime}
      initial="from"
      animate="to"
    >
      <Navbar />
      <Cursor/>
      <TopCode fileName={"ErrorPage"} />
      <div className="box">
        <h1 className="glitch">Error:404;</h1>
        <h2>Page Not Found</h2>
        <Link to="/"><i className="bi bi-arrow-left"></i> Go back</Link>
      </div>
      <Signature/>
      <Footer/>
      <BottomCode fileName={"ErrorPage"} />
    </motion.div>
  );
};

export default ErrorPage;
