import React from "react";

const Version = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div>
      <p className="version">Version:1.0 <span className="bi bi-link-45deg"></span>
      <br /> &copy; {year} Suman Kumar Maharana
      </p>
    </div>
  );
};

export default Version;
