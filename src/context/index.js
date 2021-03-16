import React from "react";
import { SearchHistoryProvider } from "./searchHistory";
import { ServerProvider } from "./server";
import { BackgroundProvider } from "./background";
import { SearchmodeProvider } from "./searchmode";

export const MultiProvider = ({ children }) => (
    <ServerProvider>
        <SearchHistoryProvider>
            <BackgroundProvider>
                <SearchmodeProvider>{children}</SearchmodeProvider>
            </BackgroundProvider>
        </SearchHistoryProvider>
    </ServerProvider>
);
export * from "./server";
export * from "./searchHistory";
export * from "./background";
export * from "./searchmode";
