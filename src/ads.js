import React from "react";
import AdSense from "react-adsense"

export default function Ads() {
    return <>
        <AdSense.Google
            client="ca-pub-1358649580645755"
            slot="7721492010"
            style={{ display: "block "}}
            format="auto"
            responsive="true"
        />
        <h1>SANITY CHECK TEXT</h1>
    </>
};
