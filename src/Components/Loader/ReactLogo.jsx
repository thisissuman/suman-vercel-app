import React from 'react'
import {motion} from "framer-motion";
import {reactLogoAnime} from "./LoaderAnimation";
const ReactLogo = () => {
    return (
        <div>
        <motion.img
        src="/images/react.svg"
        alt=""
        className="react"
        variants={reactLogoAnime}
        initial="from"
        animate="to"
      />
        </div>
    )
}

export default ReactLogo
