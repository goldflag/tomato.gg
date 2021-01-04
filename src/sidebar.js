import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import "./css/sidebar.css";
import TomatoLogo from "./assets/tomato.png";
import {
    Apps,
    Info,
    Star,
    Games,
    DeleteOutline,
    BarChart,
    LibraryBooks,
    FormatListNumbered,
} from "@material-ui/icons";
import {
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@material-ui/core";
import serverConv from "./data/serverConv";
import { SearchHistoryContext } from "./context";

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
    const { history, clearHistory } = useContext(SearchHistoryContext);
    const redirectToPlayerStatsPage = (playerName, playerID, playerServer) => {
        props.history.push(
            `/stats/${serverConv[playerServer]}/${playerName}=${playerID}`
        );
    };

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
                <div className="line" />
                <div className="menu">
                    <Typography
                        variant="h6"
                        className="menu-link"
                        style={{ marginTop: "-5px", paddingRight: "unset" }}
                    >
                        Recent searches
                        <IconButton
                            aria-label="clear history"
                            size="small"
                            onClick={clearHistory}
                            style={{
                                color: "inherit",
                                marginLeft: ".6rem",
                                marginBottom: ".1rem",
                            }}
                        >
                            <DeleteOutline />
                        </IconButton>
                    </Typography>
                    <List
                        aria-label="recent searches"
                        style={{ marginTop: "-10px" }}
                    >
                        {history
                            .slice(0, Math.min(history.length, 5)) // No more than 5 recent searches
                            .map(({ name, id, server }) => (
                                <ListItem
                                    key={id}
                                    button
                                    onClick={() =>
                                        redirectToPlayerStatsPage(
                                            name,
                                            id,
                                            server
                                        )
                                    }
                                    style={{ padding: "0px 20px 10px 22px" }}
                                >
                                    <img
                                        src={require(`./assets/flagIcons/${server}mini.png`)}
                                        style={{ maxHeight: "21px" }}
                                        alt={"4"}
                                    />
                                    <ListItemText
                                        style={{
                                            marginLeft: "10px",
                                            color: "white",
                                        }}
                                        primary={name}
                                    />
                                </ListItem>
                            ))}
                    </List>
                </div>
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
