import React from "react";
import HtmlLogo from "./HtmlLogo";
import CssLogo from "./CssLogo";
import JavaScriptLogo from "./JavaScriptLogo";
import ReactLogo from "./ReactLogo";
const LogoSection = () => {
  return (
    <div>
      <div className="icons">
      <HtmlLogo/>
      <CssLogo/>
      <JavaScriptLogo/>
      <ReactLogo/>
      </div>
    </div>
  );
};

export default LogoSection;
