import React from "react";
import Navbar from "../Base/Navbar";
import Cursor from "../Base/Cursor";
import TopCode from "../Base/TopCode";
import BottomCode from "../Base/BottomCode";
import Signature from "../Base/Signature";
import Footer from "../Base/Footer";
import Info from "./Info";
import { motion } from "framer-motion";
import { pageAnime } from "../Base/BaseAnimation";
import { contactInfoAnime } from "./ContactAnimation";
const Contact = () => {
  return (
    <motion.div variants={pageAnime} initial="from" animate="to">
      <Navbar />
      <Cursor />
      <TopCode fileName={"Contact"} />
      <div className="contact">
        <h1 className="heading">
          Contact Me<span>()</span>;
        </h1>
        <motion.div
          className="contactInfo"
          variants={contactInfoAnime}
          initial="from"
          animate="to"
        >
          <Info />
          <div className="contactImg">
          <img src="/images/photos/contact.png" alt="ContactImage"/>
          </div>
        </motion.div>
      </div>
      <Footer />
      <BottomCode fileName={"Contact"} />
      <Signature />
    </motion.div>
  );
};

export default Contact;
