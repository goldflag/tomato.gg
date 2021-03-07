// NPM
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { IconButton, Chip, Avatar } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import LocalizedStrings from "react-localization";
import styled from "styled-components";
import FlipMove from "react-flip-move";

// LOCAL
import { serverConv } from "Data/conversions";
import { SearchHistoryContext } from "Context";

const strings = new LocalizedStrings({
    en: {
        clearHistory: "clear history",
        server: "select default server",
    },
    cs: {
        clearHistory: "vymazat historii",
        server: "vyberte výchozí server",
    },
    es: {
        clearHistory: "borrar historial",
        server: "seleccionar servidor predeterminado",
    },
    fr: {
        clearHistory: "Effacer l'historique",
        server: "Sélectionnez un serveur par défaut",
    },
    tr: {
        clearHistory: "Geçmişi temizle",
        server: "Varsayılan sunucuyu seç",
    },
    pl: {
        clearHistory: "Wyczyść historię",
        server: "Wybierz domyślny serwer",
    },
    ru: {
        clearHistory: "Очистить историю",
        server: "Выберите свой сервер",
    },
});

const HistoryWrapper = styled.div`
    flex: 1;
    align-self: flex-start;

    overflow: hidden;
    max-height: 32px;
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;

    background-color: #4d5895;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SearchItem = styled(Chip)`
    margin: 0rem 0.35rem 0.75rem !important;
    color: white !important;
    background-color: #252e69 !important;
    border-width: 2px !important;
    border-color: ${({ isClan }) => isClan === true ? "rgb(141, 86, 232)" : "#4e80c2" } !important;
    &:hover {
        border-color: rgb(140, 150, 210) !important;
    }
    svg {
        color: #7485e1;
    }
    svg:hover {
        color: rgb(140, 150, 210);
    }
`;

const ClearIcon = styled(IconButton)`
    color: white !important;
    display: inline-block;
`;

const SearchHistory = () => {
    const history = useHistory();
    const { history: searchHistory, addToHistory, removeFromHistory, clearHistory } = useContext(SearchHistoryContext);
    const redirectToStatsPage = (name, id, server, isClan) => {
        addToHistory(name, id, server, isClan);
        if (isClan) history.push(`/clan-stats/${serverConv[server]}/${id}`);
        else history.push(`/stats/${serverConv[server]}/${name}=${id}`);
    };
    return (
        <HistoryWrapper>
            {searchHistory.length ? (
                <ClearIcon aria-label={strings.clearHistory} size="small" onClick={clearHistory}>
                    <DeleteOutline />
                </ClearIcon>
            ) : null}
            <ItemContainer>
                <FlipMove>
                    {searchHistory.map(({ name, id, server, isClan }) => (
                        <SearchItem
                            key={name}
                            variant="outlined"
                            avatar={
                                <Avatar
                                    alt={server}
                                    src={require(`Assets/flagIcons/${server}mini.png`)}
                                    style={{ maxHeight: "21px" }}
                                />
                            }
                            onClick={() => redirectToStatsPage(name, id, server, isClan)}
                            onDelete={() => removeFromHistory(id)}
                            isClan={isClan}
                            label={isClan ? name.toUpperCase() : name}
                        />
                    ))}
                </FlipMove>
            </ItemContainer>
        </HistoryWrapper>
    );
};

export default SearchHistory;
