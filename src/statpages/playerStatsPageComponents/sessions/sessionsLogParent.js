import React, { useState } from "react";
import { TabPanel, CustomTabs, CustomTab } from "../../../components/customTabs";
import SessionsLog from "./sessionsLog";
import LocalizedStrings from "Functions/localizedStrings";

const strings = LocalizedStrings({
  en: {
    daily: "DAILY SESSIONS LOG",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  cs: {
    daily: "DENNÍ ZÁZNAM BITEV",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  de: {
    daily: "TÄGLICHE SITZUNGSSTATISTIKEN",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  es: {
    daily: "REGISTRO DE SESIONES DIARIAS",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  fr: {
    daily: "RÉCAPITULATIF DES SESSIONS JOURNALIÈRES",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  ko: {
    daily: "매일 세션 로그",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  hr: {
    daily: "DNEVNA SEZONA",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  pl: {
    daily: "ZAPIS DZIENNYCH SESJI",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  ru: {
    daily: "ЕЖЕДНЕВНЫЕ СЕССИИ",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  tr: {
    daily: "GÜNLÜK OTURUM KAYITLARI",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
  zh: {
    daily: "每日記錄",
    weekly: "WEEKLY STATS",
    monthly: "MONTHLY STATS",
  },
});

export default function ExpectedDist({ rows, type, data, setSelectedTank, setModalOpen }) {
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
          <SessionsLog rows={rows} data={data} setSelectedTank={setSelectedTank} setModalOpen={setModalOpen} />
        </TabPanel>
      </div>
    </div>
  );
}
