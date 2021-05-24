import React, { useState } from "react";
import { TabPanel, CustomTabs, CustomTab } from "../../../components/customTabs";
import SessionsLog from "./sessionsLog";
import LocalizedStrings from "Functions/localizedStrings";

const strings = LocalizedStrings({
    en: { 
        daily: "DAILY STATS",
        weekly: "WEEKLY STATS",
        monthly: "MONTHLY STATS"
    },
    cs: { 
        daily: "DENNÍ STATISTIKY",
        weekly: "TÝDENNÍ STATISTIKY",
        monthly: "MĚSÍČNÍ STATISTIKY"
    },
    de: { 
        daily: "TÄGLICHE STATISTIKEN",
        weekly: "WÖCHENTLICHE STATISTIKEN",
        monthly: "MONATLICHE STATISTIKEN"
    },
    es: { 
        daily: "ESTADÍSTICAS DIARIAS",
        weekly: "ESTADÍSTICAS SEMANALES",
        monthly: "ESTADÍSTICAS MENSUALES"
    },
    fr: { 
        daily: "STATS QUOTIDIENNES",
        weekly: "STATS HEBDOMADAIRES",
        monthly: "STATS MENSUELLES"
    },
    ko: { 
        daily: "매일 세션 로그", 
        weekly: "WEEKLY STATS",
        monthly: "MONTHLY STATS"
    },
    hr: { 
        daily: "DNEVNI STATS",
        weekly: "TJEDNI STATS",
        monthly: "MJESEČNI STATS"
    },
    pl: { 
        daily: "DZIENNE STATYSTYKI",
        weekly: "TYGODNIOWE STATYSTYKI",
        monthly: "MIESIĘCZNE STATYSTYKI"
    },
    ru: { 
        daily: "ЕЖЕДНЕВНАЯ СТАТИСТИКА",
        weekly: "ЕЖЕНЕДЕЛЬНАЯ СТАТИСТИКА",
        monthly: "ЕЖЕМЕСЯЧНАЯ СТАТИСТИКА"
    },
    tr: { 
        daily: "GÜNLÜK İSTATİSTİKLER",
        weekly: "HAFTALIK İSTATİSTİKLER",
        monthly: "AYLIK İSTATİSTİKLER"
    },
    zh: { 
        daily: "每日統計",
        weekly: "每週統計",
        monthly: "每月統計"
    },
});

export default function ExpectedDist({ rows, type, data }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>
                <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                    <CustomTab label={strings[type]} />
                </CustomTabs>
                <TabPanel value={value} index={0}>
                    <SessionsLog rows={rows} data={data} />
                </TabPanel>
            </div>
        </div>
    );
}
