import React from "react";
import { SearchHistoryProvider } from "./searchHistory";
import { ServerProvider } from "./server";
import { BackgroundProvider } from "./background";

export const MultiProvider = ({ children }) => (
    <ServerProvider>
        <SearchHistoryProvider>
            <BackgroundProvider>{children}</BackgroundProvider></SearchHistoryProvider>
    </ServerProvider>
);
export * from "./server";
export * from "./searchHistory";
export * from "./background";
