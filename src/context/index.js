import React from "react";
import { SearchHistoryProvider } from "./searchHistory";
import { ServerProvider } from "./server";

export const MultiProvider = ({ children }) => (
    <ServerProvider>
        <SearchHistoryProvider>{children}</SearchHistoryProvider>
    </ServerProvider>
);
export * from "./server";
export * from "./searchHistory";
