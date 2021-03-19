import React from "react";
import AdSense from "react-adsense"

export default function Sidebar1({ slot }) {
    return <>
        <AdSense.Google
            client="ca-pub-1358649580645755"
            slot={slot}
            style={{ display: "block "}}
            format="auto"
            responsive="true"
        />
    </>
};
