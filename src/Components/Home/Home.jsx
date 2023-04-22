import React from "react";
import Navbar from "../Base/Navbar";
import Cursor from "../Base/Cursor";
import TopCode from "../Base/TopCode";
import BottomCode from "../Base/BottomCode";
import Content from "./Content";
import Signature from "../Base/Signature";
import Footer from "../Base/Footer";
import { motion } from "framer-motion";
import { pageAnime } from "../Base/BaseAnimation";
import { homeDivAnime } from "./HomeAnimation";
const Home = () => {
  return (
    <motion.div variants={pageAnime} initial="from" animate="to">
      <Navbar />
      <Cursor/>
      <TopCode fileName={"Home"} />
      <motion.div
        className="home"
        variants={homeDivAnime}
        initial="from"
        animate="to"
      >
        <Content />
      </motion.div>
      <Footer />
      <BottomCode fileName={"Home"} />
      <Signature />
    </motion.div>
  );
};

export default Home;
