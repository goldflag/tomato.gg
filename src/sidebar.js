import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import TomatoLogo from "./assets/tomato.png";
import background from "./assets/sidebar.jpg";
import {
    Apps,
    Info,
    Star,
    Games,
    BarChart,
    LibraryBooks,
    FormatListNumbered,
} from "@material-ui/icons";

const LINKS = [
    { url: "/", title: "Home", Icon: Apps },
    {
        url: "/tank-stats",
        title: "Tank Stats",
        newIcon: true,
        Icon: BarChart,
    },
    {
        url: "/leaderboards",
        title: "Leaderboards",
        newIcon: true,
        Icon: FormatListNumbered,
    },
    // {url: "/tank-list", title: "Tank List", Icon: BarChart},
    // { url: "/server-stats", title: "Server Stats", Icon: Public },
    { url: "/moe", title: "MoE Reqs", Icon: Star },
    { url: "/mastery", title: "Mastery Reqs", Icon: Star },
    { url: "/wn8", title: "WN8 Exp. Values", Icon: Games },
    {
        url: "/stats-reference",
        title: "Stats Reference",
        Icon: LibraryBooks,
    },
    { url: "/about", title: "About", Icon: Info },
];

const Styles = styled.div`
    .sidebar {
        font-family: "Roboto";
        font-weight: 500;
        margin-top: 0rem;
        margin-bottom: 10rem;
        z-index: 0;
        height: 100%;
        width: 14rem;
        margin-right: 14rem;
        position: fixed;
        left: 0;
        background: url(${background}) no-repeat fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        overflow-x: hidden;
    }

    .layer {
        /* background-color: rgba(23, 20, 51, 0.7); */
        background-color: rgba(24, 25, 92, 0.7);

        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .line {
        width: 100%;
        height: 0%;
        border-bottom: 1px solid rgb(100, 95, 129);
        position: absolute;
    }

    .logo {
        padding: 10px 10px 10px 10px;
        width: auto;
        height: 4em;
    }

    .menu {
        font-size: 14px;
        padding-top: 10px;
    }

    .menu a {
        text-decoration: none;
        color: #dddddd !important;
        display: block;
    }

    .menu a:hover {
        color: rgb(207, 12, 116) !important;
    }

    .bottom {
        padding: 10px 10px 10px 10px;
        margin: 10px;
        font-size: 0.8rem;
        font-weight: 300;
        color: #96a7c7;
        position: fixed;
        border-top: 1px solid rgb(100, 95, 129);
        bottom: 0;
        /* max-width: calc(10vw + 50px); */
    }

    .menu-link {
        padding: 10px 20px 10px 20px;
        font-size: 16px;
        color: #dddddd;
    }

    .menu-link-icon {
        vertical-align: middle;
        padding: 0px 1px 2px 1px !important;
    }

    /* TODO: Add media queries for small screens (when the height of the screen is less than 450px, add a smaller padding and font-size) */

    @media screen and (max-width: 1000px) {
        .sidebar {
            width: 0px;
        }
        .sidebar {
            padding-top: 15px;
        }
        /* .sidebar a {font-size: 18px;} */
        .bottom {
            max-width: 0;
        }
        .line {
            width: 0px;
        }
    }

    .donationButton {
        width: 100%;
        margin: 10px 0;
        height: 30px;
        padding: 5px;
        border-radius: 10px;
        color: white;
        text-align: center;
        font-size: 0.9rem;
    }

    .paypal {
        background-color: rgb(34, 97, 179);
    }

    .kofi {
        background-color: rgb(232, 37, 79);
    }

    .paypal:hover {
        background-color: rgb(50, 110, 200);
    }

    .kofi:hover {
        background-color: rgb(245, 60, 110);
    }

    .new {
        font-size: 0.8rem;
        padding: 3px;
        color: rgb(255, 255, 255);
        border-radius: 5px;
        background-color: rgb(0, 184, 104);
    }
`;

const Sidebar = withRouter((props) => {
    return (
        <Styles>
            <div className="sidebar">
                <div className="layer">
                    <Link to="/">
                        <div className="logo">
                            <img
                                src={TomatoLogo}
                                alt="logo"
                                style={{
                                    height: "110%",
                                    width: "auto",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "0rem",
                                }}
                            />
                        </div>
                    </Link>
                    <div className="line" />
                    <div className="menu">
                        {LINKS.map(({ url, title, Icon, newIcon }) => (
                            <Link to={url} className="menu-link" key={url}>
                                <Icon className="menu-link-icon" />
                                &nbsp;&nbsp;{title}&nbsp;&nbsp;
                                {newIcon === true ? (
                                    <span className="new">NEW! </span>
                                ) : null}
                            </Link>
                        ))}
                    </div>

                    <div
                        style={{
                            backgroundColor: "rgba(40, 40, 60, 0.6)",
                            width: "205px",
                            height: "210px",
                            margin: "10px",
                            bottom: "150px",
                            position: "absolute",
                            padding: "10px",
                            fontSize: "0.8rem",
                            fontWeight: "400",
                            color: "rgb(161, 181, 214)",
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: "500",
                                color: "white",
                                lineHeight: "0rem",
                            }}
                        >
                            {" "}
                            Support Tomato.gg
                        </h2>
                        Tomato.gg runs on entirely on user donations. If you
                        find value in the website, consider chipping in to help
                        keep the servers running.
                        <a target="blank" href="https://ko-fi.com/goldflag">
                            <div className="donationButton kofi">
                                Support on Ko-fi
                            </div>
                        </a>
                        <a
                            target="blank"
                            href="https://www.paypal.com/donate/?hosted_button_id=U457SKR8EQTSQ"
                        >
                            <div className="donationButton paypal">
                                Support on Paypal
                            </div>
                        </a>
                    </div>
                    <div
                        style={{
                            fontSize: "0.8rem",
                            fontWeight: "300",
                            color: "#96a7c7",
                            padding: "15px",
                            bottom: "90px",
                            position: "absolute",
                        }}
                    >
                        <span style={{ fontWeight: "500" }}>
                            Partnered Websites
                        </span>
                        <span style={{ color: "white" }}>
                            <br />
                            <a
                                style={{ color: "white" }}
                                target="blank"
                                href="https://herhor.net/wot/"
                            >
                                herhor.net
                            </a>
                        </span>
                        - MoE rankings and image generator
                        <br />
                    </div>
                    <div
                        className="line"
                        style={{
                            bottom: "90px",
                            position: "absolute",
                        }}
                    />

                    <div
                        style={{
                            fontSize: "0.8rem",
                            fontWeight: "300",
                            color: "#96a7c7",
                            padding: "15px",
                            bottom: "0px",
                            position: "absolute",
                        }}
                    >
                        Tomato.gg is a website created by{" "}
                        <Link
                            style={{ color: "rgb(205, 205, 205)" }}
                            to="/stats/NA/goldflag=1011694618"
                        >
                            Goldflag
                        </Link>{" "}
                        and is not affiliated with Wargaming.net.
                        <br />
                        Zeyu Yang © 2021
                    </div>
                </div>
            </div>
        </Styles>
    );
});

export default Sidebar;
