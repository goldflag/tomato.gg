import React from "react";
import ReactDOM from "react-dom";
import Tomatopedia from "./tomatopedia.js";
import { MultiProvider } from "./context";
import Snowfall from "react-snowfall";

function Main() {
    return (
        <MultiProvider>
            <Snowfall snowflakeCount={75} />
            <Tomatopedia />
        </MultiProvider>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));
