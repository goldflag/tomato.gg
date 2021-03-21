import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TabPanel, CustomTabs, CustomTab } from "../../../components/customTabs";
import SessionsLog from "./sessionsLog";
import LocalizedStrings from "Functions/localizedStrings";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const strings = LocalizedStrings({
    en: { sessionsLog: "DAILY SESSIONS LOG" },
    cs: { sessionsLog: "DENNÍ ZÁZNAM BITEV" },
    de: { sessionsLog: "TÄGLICHE SITZUNGSSTATISTIKEN" },
    es: { sessionsLog: "REGISTRO DE SESIONES DIARIAS" },
    fr: { sessionsLog: "RÉCAPITULATIF DES SESSIONS JOURNALIÈRES" },
    ko: { sessionsLog: "매일 세션 로그" },
    hr: { sessionsLog: "DNEVNA SEZONA" },
    pl: { sessionsLog: "ZAPIS DZIENNYCH SESJI" },
    ru: { sessionsLog: "ЕЖЕДНЕВНЫЕ СЕССИИ" },
    tr: { sessionsLog: "GÜNLÜK OTURUM KAYITLARI" },
    zh: { sessionsLog: "每日記錄" },
});

export default function ExpectedDist(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div>
                <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                    <CustomTab label={strings.sessionsLog} />
                </CustomTabs>
                <TabPanel value={value} index={0}>
                    <SessionsLog data={props.data} />
                </TabPanel>
            </div>
        </div>
    );
}
