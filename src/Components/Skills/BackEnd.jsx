import React from "react";
import { motion } from "framer-motion";
import { skillsCardAnime } from "./SkillsAnimation";
const BackEnd = () => {
  return (
    <div>
      <motion.div
        className="card"
        variants={skillsCardAnime}
        initial="from"
        animate="to"
      >
        <div className="btns">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <h1>Back-end</h1>
        <br />
        <hr />
        <div className="tech">
          <figure>
            <img src="/images/nodejs.svg" alt="Node.js" title="Node.js" />
            <figcaption>Node.js</figcaption>
          </figure>
          <figure>
            <img
              src="/images/express.svg"
              alt="Express.js"
              title="Express.js"
            />
            <figcaption>Express</figcaption>
          </figure>
          <figure>
            <img src="/images/mongodb.svg" alt="MongoDB" title="MongoDB" />
            <figcaption>MongoDB</figcaption>
          </figure>
          <figure>
            <img src="/images/firebase.svg" alt="Firebase" title="Firebase" />
            <figcaption>Firebase</figcaption>
          </figure>
          <figure>
            <img src="/images/mysql.svg" alt="MySQL" title="MySQL" />
            <figcaption>MySQL</figcaption>
          </figure>
        </div>
      </motion.div>
    </div>
  );
};

export default BackEnd;
