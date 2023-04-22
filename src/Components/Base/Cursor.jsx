import React, { useRef, useEffect } from "react";
const Cursor = () => {
  const customCursor = useRef(null);
  useEffect(() => {
    let MouseMove = (event) => {
      const { clientX, clientY } = event;
      customCursor.current.style.cssText = `left:${clientX}px; top:${clientY}px;`;
    };
    document.addEventListener("mousemove", MouseMove);
    return () => {
      document.removeEventListener("mousemove", MouseMove);
    };
  }, []);
  return <div className="cursor" ref={customCursor}></div>;
};

export default Cursor;
