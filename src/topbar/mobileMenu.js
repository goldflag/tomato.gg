// NPM
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";

// LOCAL
import smallLogo from "Assets/smalllogo.png";
import { mobileMenuRoutes } from "../routes";
import { NewIcon } from "Components";

const ListContainer = styled.div`
    background-color: #183061;

    a,
    svg {
        color: white !important;
        text-decoration: none;
    }
`;

const MenuContainer = styled.div`
    display: none;
    @media screen and (max-width: 1000px) {
        display: block;
    }
`;

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
        setIsOpen(open);
    };

    return (
        <MenuContainer>
            <IconButton onClick={toggleDrawer("top", true)} style={{ padding: "0" }}>
                <img src={smallLogo} alt="smalllogo" style={{ maxWidth: "70px" }} />
            </IconButton>
            <Drawer anchor={"top"} open={isOpen} onClose={toggleDrawer(false)}>
                <ListContainer onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <List>
                        {mobileMenuRoutes.map(({ Icon, title, path, isNew }, i) => (
                            <Link to={path} key={i} tabIndex="-1">
                                <ListItem button>
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={title()} />
                                    {isNew ? <NewIcon /> : null}
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider />
                </ListContainer>
            </Drawer>
        </MenuContainer>
    );
}

export default MobileMenu;
