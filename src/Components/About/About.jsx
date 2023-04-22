import React, { useEffect, useState } from "react";
import Navbar from "../Base/Navbar";
import Cursor from "../Base/Cursor";
import TopCode from "../Base/TopCode";
import BottomCode from "../Base/BottomCode";
import Signature from "../Base/Signature";
import Footer from "../Base/Footer";
import Paragraph from "./Paragraph";
import Work1 from "./Work1";
import Work2 from "./Work2";
import { motion } from "framer-motion";
import { pageAnime } from "../Base/BaseAnimation";
import { Images } from "./ImagesArr";
import { imageAnime } from "./AboutAnimation";
const About = () => {
  const [imgPath, setPath] = useState("");
  let random = Images[Math.floor(Math.random() * Images.length)];
  useEffect(() => {
    setPath(random);
  }, []);
  return (
    <motion.div variants={pageAnime} initial="from" animate="to">
      <Navbar />
      <Cursor />
      <TopCode fileName={"About"} />
      <div className="about">
        <h1 className="heading">
          About Me<span>()</span>;
        </h1>
        <motion.div
          className="image"
          variants={imageAnime}
          initial="from"
          animate="to"
        >
          <img src={imgPath} />
        </motion.div>
        <div className="me">
          <h1>Hello Stranger!</h1>
          <Paragraph />
          <Work1 />
          <Work2 />
        </div>
      </div>
      <Footer />
      <BottomCode fileName={"About"} />
      <Signature />
    </motion.div>
  );
};

export default About;
