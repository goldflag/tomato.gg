import React from "react";
import { ThemeProvider } from "./theme";
import { SearchHistoryProvider } from "./searchHistory";
import { ServerProvider } from "./server";

export const MultiProvider = ({ children }) => (
    <ThemeProvider>
        <ServerProvider>
            <SearchHistoryProvider>{children}</SearchHistoryProvider>
        </ServerProvider>
    </ThemeProvider>
);
export * from "./theme";
export * from "./server";
export * from "./searchHistory";
