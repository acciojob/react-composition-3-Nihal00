
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  const [isShow, setIsShow] = useState(false);

  const onHover = () => setIsShow(true);
  const offHover = () => setIsShow(false);

  return (
    <div className="tootiptext">
        {/* Do not remove the main div */}
        {isShow ? <Tooltip 
          text= "This is a tooltip" 
        /> : ""}
        <h1 
          onMouseEnter={onHover}
          onMouseLeave={offHover}
        >Hover over me</h1>
        <hr />
        {isShow ? <Tooltip 
          text="This is another tooltip"
        /> : ""}
        <p
          onMouseEnter={onHover}
          onMouseLeave={offHover}
        >Hover over me to see the another tooltip</p>
        <hr />
    </div>
  )
}

export default App
