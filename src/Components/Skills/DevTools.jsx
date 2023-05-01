import React from "react";
import { motion } from "framer-motion";
import { skillsCardAnime } from "./SkillsAnimation";
const DevTools = () => {
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
        <h1>Dev-tools</h1>
        <br />
        <hr />
        <div className="tech">
        <figure>
            <img src="/images/linux.png" alt="Postman" title="Postman" />
            <figcaption>Linux</figcaption>
          </figure>
          <figure>
            <img src="/images/git.svg" alt="Git" title="Git" />
            <figcaption>Git</figcaption>
          </figure>
          <figure>
            <img src="/images/github.svg" alt="Github" title="Github" />
            <figcaption>GitHub</figcaption>
          </figure>
          <figure>
            <img src="/images/vscode.svg" alt="VSCode" title="VSCode" />
            <figcaption>Visual Studio</figcaption>
          </figure>
          <figure>
            <img src="/images/chrome.svg" alt="Chrome" title="Chrome" />
            <figcaption>Chrome Devtools</figcaption>
          </figure>
          <figure>
            <img src="/images/npm-icon.svg" alt="NPM" title="NPM" />
            <figcaption>NPM</figcaption>
          </figure>
          <figure>
            <img
              src="/images/cmd.svg"
              alt="Command Line"
              title="Command Line"
            />
            <figcaption>Command Line</figcaption>
          </figure>
          <figure>
            <img src="/images/vercel.svg" alt="Vercel" title="Vercel" />
            <figcaption>Vercel</figcaption>
          </figure>
          <figure>
            <img src="/images/postman.svg" alt="Postman" title="Postman" />
            <figcaption>Postman</figcaption>
          </figure>
        </div>
      </motion.div>
    </div>
  );
};

export default DevTools;
