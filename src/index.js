import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import NewApp from './containers/App/index';
import moment from "moment";

function App() {
    const [state, setState] = useState("CLICK ME");

    return (
         <NewApp/>
    )
}

render( <Router><App /></Router>, document.getElementById("root"));
