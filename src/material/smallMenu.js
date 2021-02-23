import React, { useState } from "react";

import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Apps, Info, Star, Games, BarChart, LibraryBooks } from "@material-ui/icons";
import smallLogo from "../assets/smalllogo.png";
import styled from "styled-components";

const Styles = styled.div`
    .dark-mode {
        background-color: rgb(50, 50, 54);
        color: rgb(234, 238, 248);
    }

    /* unvisited link */
    .dark-mode a {
        color: rgb(161, 177, 230);
        text-decoration: none;
    }

    /* mouse over link */
    .dark-mode a:hover {
        color: rgb(180, 70, 129);
        text-decoration: none;
    }

    /* selected link */
    .dark-mode a:active {
        color: rgb(120, 60, 131);
        text-decoration: none;
    }

    .light-mode {
        background-color: rgb(234, 238, 248);
    }

    /* unvisited link */
    .light-mode a {
        color: rgb(58, 89, 189);
        text-decoration: none;
    }

    /* mouse over link */
    .light-mode a:hover {
        color: rgb(207, 12, 116);
        text-decoration: none;
    }

    /* selected link */
    .light-mode a:active {
        color: rgb(108, 37, 121);
        text-decoration: none;
    }

    .wrapper {
        min-height: 100vh;
    }
`;

export default function TemporaryDrawer() {
    const [state, setState] = useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const textStyle = {
        color: "rgb(255, 255, 255)",
    };

    const list = (anchor) => (
        <Styles>
            <div
                className={"dark-mode"}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    <Link to="/">
                        <ListItem button key={"1"}>
                            <ListItemIcon>
                                <Apps style={textStyle} />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} style={textStyle} />
                        </ListItem>
                    </Link>
                    <Link to="/tanks">
                        <ListItem button key={"2"}>
                            <ListItemIcon>
                                <BarChart style={textStyle} />
                            </ListItemIcon>
                            <ListItemText primary={"Tank Stats"} style={textStyle} />
                        </ListItem>
                    </Link>
                    <Link to="/moe">
                        <ListItem button key={"3"}>
                            <ListItemIcon>
                                <Star style={textStyle} />
                            </ListItemIcon>
                            <ListItemText primary={"MoE Reqs"} style={textStyle} />
                        </ListItem>
                    </Link>
                    <Link to="/mastery">
                        <ListItem button key={"3"}>
                            <ListItemIcon>
                                <Star style={textStyle} />
                            </ListItemIcon>
                            <ListItemText primary={"Mastery Reqs"} style={textStyle} />
                        </ListItem>
                    </Link>
                    <Link to="/wn8">
                        <ListItem button key={"3"}>
                            <ListItemIcon>
                                <Games style={textStyle} />
                            </ListItemIcon>
                            <ListItemText primary={"WN8 Exp. Values"} style={textStyle} />
                        </ListItem>
                    </Link>
                    {/* <Link to="/server-stats">
                        <ListItem button key={"3"}>
                            <ListItemIcon>
                                <Star style={iconStyle} />
                            </ListItemIcon>
                            <ListItemText primary={"Server Stats"} style={textStyle}/>
                        </ListItem>
                    </Link> */}
                    <Link to="/stats-reference">
                        <ListItem button key={"4"}>
                            <ListItemIcon>
                                <LibraryBooks style={textStyle} />
                            </ListItemIcon>
                            <ListItemText primary={"Stats Reference"} style={textStyle} />
                        </ListItem>
                    </Link>
                    <Link to="/about">
                        <ListItem button key={"5"}>
                            <ListItemIcon>
                                <Info style={textStyle} />
                            </ListItemIcon>
                            <ListItemText primary={"About"} style={textStyle} />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </div>
        </Styles>
    );

    return (
        <div>
            <React.Fragment key={"top"}>
                <Button onClick={toggleDrawer("top", true)}>
                    <span style={{ fontSize: "1.7rem" }}>
                        <img src={smallLogo} alt="smalllogo" style={{ maxWidth: "70px", padding: "0 15px 0 0" }} />
                    </span>
                </Button>
                <Drawer anchor={"top"} open={state["top"]} onClose={toggleDrawer("top", false)}>
                    {list("🍅")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
