
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  const [state, setState] = useState(false);
  const [stateTool, setToolState] = useState(false);

    return(
      <div>
        <div className="tootip" onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
          
          {state ? <Tooltip text="This is tooltip" /> : ""}

          <h1>Hover over me</h1>

        </div>

        <div className="tooltiptext" onMouseEnter={() => setToolState(true)} onMouseLeave={() => setToolState(false)} >
         
          {stateTool ? <Tooltip text="This is another tooltip" /> : ""}

          <p>Hover over me to see another tooltip</p>
        </div>

      </div>
    )
  
}

export default App
