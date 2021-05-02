// NPM
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import OutsideClickHandler from "react-outside-click-handler";
import LanguageSelect from "./languageSelect";
import SelectQuery from "Material/select";

// LOCAL
import smallLogo from "Assets/smalllogo.png";
import { mobileMenuRoutes } from "../routes";
import { NewIcon } from "Components";
import { ServerContext, SearchmodeContext } from "Context";

const MenuContainer = styled.div`
    display: block;
    z-index: 7;
    height: auto;
`;

const Menu = styled.div`
    position: absolute;
    overflow: hidden;  
    transition: all 0.5s ease-in-out;
    background-color: rgb(77, 88, 149);
    height: ${({ isOpen }) => isOpen ? "350px" : "0px"};
    max-width: 100vw;
`

const Button = styled.button`
    font-family: Roboto;
    width: 100%;
    padding: 10px 14px;
    font-size: 1rem;
    color: white;
    text-align: left;
    background-color: rgb(77, 88, 149);
    transition: background-color 0.3s;
    border: None;
    :hover {
        background-color: rgb(50, 50, 80);
    }
`

const Options = styled.div`
    display: flex;
    padding: 0px 0px 6px 10px;
    overflow-x: scroll;
    margin-right: 0.5rem;
`;

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { mode, setMode } = useContext(SearchmodeContext);
    const { server, setServer } = useContext(ServerContext);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
        setIsOpen(open);
    };

    return (
        <MenuContainer>
            <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
                <IconButton onClick={toggleDrawer("top", true)} style={{ padding: "0" }}>
                    <img src={smallLogo} alt="smalllogo" style={{ maxWidth: "70px" }} />
                </IconButton>
                <Menu isOpen={isOpen}>
                    <Options>
                        <SelectQuery setServer={setServer} server={server} setMode={setMode} mode={mode} />
                        <LanguageSelect style={{position: "absolute"}}/>
                    </Options>
                    {mobileMenuRoutes.map(({ Icon, title, path, isNew }, i) => (
                        <Link to={path} key={i}>
                            <Button onClick={
                                () => setIsOpen(false)
                            }>
                                {/* <Icon /> */}
                                {title()} {" "}
                                {isNew ? <NewIcon /> : null}
                            </Button>
                        </Link>
                    ))}
                </Menu>
            </OutsideClickHandler>
        </MenuContainer>
    );
}

export default MobileMenu;