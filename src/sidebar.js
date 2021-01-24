import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./css/sidebar.css";
import TomatoLogo from "./assets/tomato.png";
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
    { url: "/tank-stats", title: "Tank Stats", Icon: BarChart },
    {
        url: "/leaderboards",
        title: "Leaderboards",
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

const Sidebar = withRouter((props) => {
    return (
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
                    {LINKS.map(({ url, title, Icon }) => (
                        <Link to={url} className="menu-link" key={url}>
                            <Icon className="menu-link-icon" />
                            &nbsp;&nbsp;{title}
                        </Link>
                    ))}
                </div>
                
                <div style={{
                        backgroundColor: "rgba(40, 40, 60, 0.6)",
                        width: "205px",
                        height: "210px",
                        margin: "10px",
                        bottom: "150px",
                        position: "absolute",
                        padding: "10px",
                        fontSize: "0.8rem",
                        fontWeight: "400",
                        color: "rgb(161, 181, 214)"

                }}>
                    <h2 style={{fontSize: "1.1rem", fontWeight: "500", color: "white", lineHeight: "0rem"}}> Support Tomato.gg</h2>
                    Tomato.gg runs on entirely on user donations. If you find value in the website, consider chipping in to help keep the servers running.
                    <a target="blank" href="https://ko-fi.com/goldflag">
                        <div style={{
                            width: "100%", 
                            margin: "10px 0", 
                            height: "30px", 
                            padding: "5px", 
                            borderRadius: "10px", 
                            color: "white", 
                            backgroundColor: "rgb(230, 25, 100)",
                            textAlign: "center",
                            fontSize: "0.9rem"
                        }}> 
                            Support on Ko-fi 
                        </div>
                    </a>
                    <a target="blank" href="https://www.paypal.com/donate/?hosted_button_id=U457SKR8EQTSQ">
                        <div style={{
                            width: "100%", 
                            margin: "10px 0", 
                            height: "30px", 
                            padding: "5px", 
                            borderRadius: "10px", 
                            color: "white", 
                            backgroundColor: "rgb(34, 97, 179)",
                            textAlign: "center",
                            fontSize: "0.9rem"
                        }}> 
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
                    <span style={{fontWeight: "500"}}>Partnered Websites</span> 
                    <span style={{color: "white"}}>
                        <br />
                        <a  style={{color: "white"}}
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
                }} />

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
    );
});

export default Sidebar;
