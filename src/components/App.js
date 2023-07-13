
import React, { useState } from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {

  const [state, setState] = useState(false);

    return(
      <div>
        <div className="tootip" onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
          <h1>Hover over me</h1>
          {state ? <Tooltip text="This is tooltip" /> : ""}
        </div>

        <div className="tooltiptext" onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)} >
          <p>Hover over me to see another tooltip</p>
          {state ? <Tooltip text="This is another tooltip" /> : ""}
        </div>

      </div>
    )
  
}

export default App
