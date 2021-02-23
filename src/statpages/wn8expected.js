import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";

import WN8Table from "./wn8Components/wn8Table";
import { Loader, FullPageTableWrapper, Info } from "../components";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

export default function Leaderboards(props) {
    const [data, setData] = useState();

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/wn8");
        getData();
    }, []);

    async function getData() {
        const url = `${backend}/api/abcd/wn8`;
        const raw = await fetch(url);
        let res = await raw.json();
        setData(res);
    }

    let table = <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />;

    if (data) {
        table = <WN8Table data={data} />;
    }

    return (
        <FullPageTableWrapper>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>WN8 Expected Values</span>
                <br />
                <br />
                <span
                    style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.3rem",
                        color: "rgb(100,100,100)",
                    }}
                >
                    Maintained by the{" "}
                    <a target="blank" href="https://modxvm.com/en/wn8-expected-values/">
                        XVM team
                    </a>
                </span>{" "}
                <br />
            </Info>
            {table}
        </FullPageTableWrapper>
    );
}
