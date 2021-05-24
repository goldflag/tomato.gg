import React from "react";
import { SearchHistoryProvider } from "./searchHistory";
import { ServerProvider } from "./server";
import { BackgroundProvider } from "./background";
import { SearchmodeProvider } from "./searchmode";
import { LoadProvider } from "./firstLoad";

export const MultiProvider = ({ children }) => (
    <LoadProvider>
        <ServerProvider>
            <SearchHistoryProvider>
                <BackgroundProvider>
                    <SearchmodeProvider>{children}</SearchmodeProvider>
                </BackgroundProvider>
            </SearchHistoryProvider>
        </ServerProvider>
    </LoadProvider>
);
export * from "./server";
export * from "./searchHistory";
export * from "./background";
export * from "./searchmode";
export * from "./firstLoad";

