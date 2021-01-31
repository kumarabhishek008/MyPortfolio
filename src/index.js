import React, { useState } from "react";
import { render } from "react-dom";
import NewApp from './app';
import moment from "moment";

function App() {
    const [state, setState] = useState("CLICK ME");

    return (
         <NewApp/>
    )
}

render(<App />, document.getElementById("root"));
