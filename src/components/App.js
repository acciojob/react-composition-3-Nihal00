
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  const [state, setState] = useState(false);
  const [stateTool, setToolState] = useState(false);

    return(
      <div>
        {state ? <Tooltip text="This is tooltip" /> : ""}
        <div className="tooltiptext" onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
          
          <h1>Hover over me</h1>

        </div>

        {stateTool ? <Tooltip text="This is another tooltip" /> : ""}
        <div className="tooltiptext" onMouseEnter={() => setToolState(true)} onMouseLeave={() => setToolState(false)} >
        
          <p>Hover over me to see another tooltip</p>

        </div>

      </div>
    )
  
}

export default App
