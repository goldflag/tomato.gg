import React from "react";
import AdSense from "react-adsense"
const Adsense_Client = process.env.REACT_APP_ADSENSE;

export default function Ads({ slot }) {
    return <>
        <AdSense.Google
            client={Adsense_Client}
            slot={slot}
            style={{ display: "block "}}
            format="auto"
            responsive="true"
        />
    </>
};
