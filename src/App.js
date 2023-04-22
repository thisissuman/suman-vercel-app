import React from "react";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
      
    </div>
  );
};

export default App;
