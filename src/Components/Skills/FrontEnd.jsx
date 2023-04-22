import React from "react";
import { motion } from "framer-motion";
import { skillsCardAnime } from "./SkillsAnimation";
const FrontEnd = () => {
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
        <h1>Front-end</h1>
        <br />
        <hr />
        <div className="tech">
          <figure>
            <img src="/images/html.svg" alt="HTML5" title="HTML5" />
            <figcaption>HTML5</figcaption>
          </figure>
          <figure>
            <img src="/images/css.svg" alt="CSS3" title="CSS3" />
            <figcaption>CSS3</figcaption>
          </figure>
          <figure>
            <img src="/images/sass.svg" alt="Sass" title="Sass" />
            <figcaption>Sass</figcaption>
          </figure>
          <figure>
            <img
              src="/images/bootstrap.svg"
              alt="Bootstrap"
              title="Bootstrap"
            />
            <figcaption>Bootstrap</figcaption>
          </figure>
          <figure>
            <img
              src="/images/tailwind-css.svg"
              alt="Tailwind-CSS"
              title="Tailwind-CSS"
            />
            <figcaption>Tailwind-css</figcaption>
          </figure>
          <figure>
            <img
              src="/images/javascript.svg"
              alt="JavaScript"
              title="JavaScript"
            />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure>
            <img src="/images/es6.svg" alt="ES6+" title="ES6+" />
            <figcaption>ES6+</figcaption>
          </figure>
          <figure>
            <img src="/images/react.svg" alt="React.js" title="React.js" />
            <figcaption>React</figcaption>
          </figure>
          <figure>
            <img src="/images/redux.svg" alt="Redux" title="Redux" />
            <figcaption>Redux</figcaption>
          </figure>
          <figure>
            <img src="/images/next-js.svg" alt="Next.js" title="Next.js" />
            <figcaption>Next.js</figcaption>
          </figure>
          <figure>
            <img
              src="/images/material-ui.svg"
              alt="Material-UI"
              title="Material-UI"
            />
            <figcaption>Material-UI</figcaption>
          </figure>
          <figure>
            <img
              src="/images/styled-components.svg"
              alt="Styled-Components"
              title="Styled-Components"
            />
            <figcaption>Styled Components</figcaption>
          </figure>
        </div>
      </motion.div>
    </div>
  );
};

export default FrontEnd;
