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
    background-color: rgba(77, 88, 149);
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
