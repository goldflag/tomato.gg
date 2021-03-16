// NPM
import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

// LOCAL
import MobileMenu from "./mobileMenu";
import SearchHistory from "./searchHistory";
import SearchmodeSelectButtons from "./searchModeSelect";
import ServerSelectButtons from "./serverSelect";
import SearchBar from "./searchBar";
import Discord from "./discord";
import LanguageSelect from "./languageSelect";

const StyledTopbar = styled.div`
    width: 100%;
    height: 4rem;
    background: linear-gradient(90deg, rgba(73,93,186,1) 0%, rgba(54,102,173,1) 50%, rgba(39,77,180,1) 100%);
    border-bottom: 1px solid rgb(100, 95, 129);
    font-family: "Roboto";
    color: white;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;

    @media screen and (max-width: 1000px) {
        padding: 0;
    }
`;

export default withRouter(function Topbar(props) {
    return (
        <StyledTopbar>
            <MobileMenu />
            <SearchHistory />
            <LanguageSelect />
            <ServerSelectButtons />
            <SearchmodeSelectButtons />
            <SearchBar />
            <Discord />
        </StyledTopbar>
    );
});
