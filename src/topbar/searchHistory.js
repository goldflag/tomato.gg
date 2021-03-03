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
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

const SearchItem = styled(Chip)`
    color: white !important;
    background-color: #214287 !important;
    border-width: 2px !important;
    // border-color: #881153 !important;
    border-color: #183061 !important;
    margin-left: 0.75rem !important;
    svg {
        color: rgba(255, 255, 255, 0.86);
    }
    svg:hover {
        color: white;
    }
`;

const SearchHistory = () => {
    const history = useHistory();
    const { history: searchHistory, addToHistory, removeFromHistory, clearHistory } = useContext(SearchHistoryContext);
    const redirectToPlayerStatsPage = (playerName, playerID, playerServer) => {
        addToHistory(playerName, playerID, playerServer);
        history.push(`/stats/${serverConv[playerServer]}/${playerName}=${playerID}`);
    };
    return (
        <HistoryWrapper>
            <FlipMove>
                {searchHistory
                    .slice(0, Math.min(history.length, 4)) // No more than 4 recent searches TODO: Make this smarter.
                    .map(({ name, id, server }) => (
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
                            onClick={() => redirectToPlayerStatsPage(name, id, server)}
                            onDelete={() => removeFromHistory(id)}
                            label={name}
                        />
                    ))}
                {searchHistory.length ? (
                    <IconButton
                        aria-label={strings.clearHistory}
                        size="small"
                        onClick={clearHistory}
                        style={{ color: "white", marginLeft: ".25rem" }}
                    >
                        <DeleteOutline />
                    </IconButton>
                ) : null}
            </FlipMove>
        </HistoryWrapper>
    );
};

export default SearchHistory;
