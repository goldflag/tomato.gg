import React from "react";
import ReactDOM from "react-dom";
import Tomatopedia from "./tomatopedia.js";
import { MultiProvider } from "./context";

function Main() {
    return (
        <MultiProvider>
            <Tomatopedia />
        </MultiProvider>
    );
}

ReactDOM.render(<Main />, document.getElementById("root"));
