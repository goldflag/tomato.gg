import React from "react";

export default function GraphCalculator(OS, overallWN8, avgTier, recentStats) {
    function clr(recent, overall, flipped) {
        if (recent === "-") return "rgb(50,50,50)";
        if (flipped) {
            if (overall < recent) return "rgb(255, 41, 94)";
            else return "rgb(34, 199, 66)";
        }
        if (overall > recent) return "rgb(255, 41, 94)";
        else return "rgb(34, 199, 66)";
    }

    const {
        recent24hr,
        recent3days,
        recent1week,
        recent30days,
        recent60days,
        recent500,
        recent1000
    } = recentStats.recents;

    const data = {
        overallWinrate: ((OS.wins * 100) / OS.battles).toFixed(2),
        overallStats: [
            {
                name: "Battles",
                Overall: OS.battles,
                "24 Hours": recent24hr.battles,
                "3 Days": recent3days.battles,
                "7 Days": recent1week.battles,
                "30 Days": recent30days.battles,
                "60 Days": recent60days.battles,
                "100 Games": recent500.battles,
                "1000 Games": recent1000.battles,
            },
            {
                name: "Avg Tier",
                Overall: avgTier.toFixed(2),
                "24 Hours": recent24hr.tier,
                "3 Days": recent3days.tier,
                "7 Days": recent1week.tier,
                "30 Days": recent30days.tier,
                "60 Days": recent60days.tier,
                "100 Games": recent500.tier,
                "1000 Games": recent1000.tier,
            },
            {
                name: "WN8",
                Overall: overallWN8,
                "24 Hours": recent24hr.overallWN8,
                "3 Days": recent3days.overallWN8,
                "7 Days": recent1week.overallWN8,
                "30 Days": recent30days.overallWN8,
                "60 Days": recent60days.overallWN8,
                "100 Games": recent500.overallWN8,
                "1000 Games": recent1000.overallWN8,
            },
            {
                name: "Wins",
                Overall: (
                    <>
                        {OS.wins}
                        <span style={{ float: "right" }}> {((OS.wins * 100) / OS.battles).toFixed(2)}%</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.wins}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.winrate, (OS.wins * 100) / OS.battles),
                            }}
                        >
                            {recent24hr.winrate}%
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.wins}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.winrate, (OS.wins * 100) / OS.battles),
                            }}
                        >
                            {recent3days.winrate}%
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.wins}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.winrate, (OS.wins * 100) / OS.battles),
                            }}
                        >
                            {recent1week.winrate}%
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.wins}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.winrate, (OS.wins * 100) / OS.battles),
                            }}
                        >
                            {recent30days.winrate}%
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.wins}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.winrate, (OS.wins * 100) / OS.battles),
                            }}
                        >
                            {recent60days.winrate}%
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.wins}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.winrate, (OS.wins * 100) / OS.battles),
                            }}
                        >
                            {recent500.winrate}%
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.wins}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.winrate, (OS.wins * 100) / OS.battles),
                            }}
                        >
                            {recent1000.winrate}%
                        </span>
                    </>
                ),
            },
            {
                name: "Losses",
                Overall: (
                    <>
                        {OS.losses}{" "}
                        <span style={{ float: "right" }}> {((OS.losses * 100) / OS.battles).toFixed(2)}%</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.losses}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.lossrate, (OS.losses * 100) / OS.battles, true),
                            }}
                        >
                            {recent24hr.lossrate}%
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.losses}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.lossrate, (OS.losses * 100) / OS.battles, true),
                            }}
                        >
                            {recent3days.lossrate}%
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.losses}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.lossrate, (OS.losses * 100) / OS.battles, true),
                            }}
                        >
                            {recent1week.lossrate}%
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.losses}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.lossrate, (OS.losses * 100) / OS.battles, true),
                            }}
                        >
                            {recent30days.lossrate}%
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.losses}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.lossrate, (OS.losses * 100) / OS.battles, true),
                            }}
                        >
                            {recent60days.lossrate}%
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.losses}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.lossrate, (OS.losses * 100) / OS.battles, true),
                            }}
                        >
                            {recent500.lossrate}%
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.losses}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.lossrate, (OS.losses * 100) / OS.battles, true),
                            }}
                        >
                            {recent1000.lossrate}%
                        </span>
                    </>
                ),
            },
            {
                name: "Draws",
                Overall: (
                    <>
                        {OS.draws}{" "}
                        <span style={{ float: "right" }}> {((OS.draws * 100) / OS.battles).toFixed(2)}%</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.draws}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.drawrate, (OS.draws * 100) / OS.battles, true),
                            }}
                        >
                            {recent24hr.drawrate}%
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.draws}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.drawrate, (OS.draws * 100) / OS.battles, true),
                            }}
                        >
                            {recent3days.drawrate}%
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.draws}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.drawrate, (OS.draws * 100) / OS.battles, true),
                            }}
                        >
                            {recent1week.drawrate}%
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.draws}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.drawrate, (OS.draws * 100) / OS.battles, true),
                            }}
                        >
                            {recent30days.drawrate}%
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.draws}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.drawrate, (OS.draws * 100) / OS.battles, true),
                            }}
                        >
                            {recent60days.drawrate}%
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.draws}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.drawrate, (OS.draws * 100) / OS.battles, true),
                            }}
                        >
                            {recent500.drawrate}%
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.draws}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.drawrate, (OS.draws * 100) / OS.battles, true),
                            }}
                        >
                            {recent1000.drawrate}%
                        </span>
                    </>
                ),
            },
            {
                name: "Damage",
                Overall: (
                    <>
                        {OS.damage_dealt}{" "}
                        <span style={{ float: "right" }}>{parseInt(OS.damage_dealt / OS.battles)}</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.damage}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.damagerate, OS.damage_dealt / OS.battles),
                            }}
                        >
                            {recent24hr.damagerate}
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.damage}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.damagerate, OS.damage_dealt / OS.battles),
                            }}
                        >
                            {recent3days.damagerate}
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.damage}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.damagerate, OS.damage_dealt / OS.battles),
                            }}
                        >
                            {recent1week.damagerate}
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.damage}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.damagerate, OS.damage_dealt / OS.battles),
                            }}
                        >
                            {recent30days.damagerate}
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.damage}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.damagerate, OS.damage_dealt / OS.battles),
                            }}
                        >
                            {recent60days.damagerate}
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.damage}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.damagerate, OS.damage_dealt / OS.battles),
                            }}
                        >
                            {recent500.damagerate}
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.damage}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.damagerate, OS.damage_dealt / OS.battles),
                            }}
                        >
                            {recent1000.damagerate}
                        </span>
                    </>
                ),
            },
            {
                name: "Frags",
                Overall: (
                    <>
                        {OS.frags} <span style={{ float: "right" }}>{(OS.frags / OS.battles).toFixed(2)}</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.frags}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.fragsrate, OS.frags / OS.battles),
                            }}
                        >
                            {recent24hr.fragsrate}
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.frags}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.fragsrate, OS.frags / OS.battles),
                            }}
                        >
                            {recent3days.fragsrate}
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.frags}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.fragsrate, OS.frags / OS.battles),
                            }}
                        >
                            {recent1week.fragsrate}
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.frags}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.fragsrate, OS.frags / OS.battles),
                            }}
                        >
                            {recent30days.fragsrate}
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.frags}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.fragsrate, OS.frags / OS.battles),
                            }}
                        >
                            {recent60days.fragsrate}
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.frags}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.fragsrate, OS.frags / OS.battles),
                            }}
                        >
                            {recent500.fragsrate}
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.frags}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.fragsrate, OS.frags / OS.battles),
                            }}
                        >
                            {recent1000.fragsrate}
                        </span>
                    </>
                ),
            },
            {
                name: "K/D Ratio",
                Overall: (OS.frags / (OS.battles - OS.survived_battles)).toFixed(2),
                "24 Hours": (
                    <>
                        <span
                            style={{
                                color: clr(recent24hr.KD, OS.frags / (OS.battles - OS.survived_battles)),
                            }}
                        >
                            {recent24hr.KD}
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        <span
                            style={{
                                color: clr(recent3days.KD, OS.frags / (OS.battles - OS.survived_battles)),
                            }}
                        >
                            {recent3days.KD}
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        <span
                            style={{
                                color: clr(recent1week.KD, OS.frags / (OS.battles - OS.survived_battles)),
                            }}
                        >
                            {recent1week.KD}
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        <span
                            style={{
                                color: clr(recent30days.KD, OS.frags / (OS.battles - OS.survived_battles)),
                            }}
                        >
                            {recent30days.KD}
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        <span
                            style={{
                                color: clr(recent60days.KD, OS.frags / (OS.battles - OS.survived_battles)),
                            }}
                        >
                            {recent60days.KD}
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        <span
                            style={{
                                color: clr(recent500.KD, OS.frags / (OS.battles - OS.survived_battles)),
                            }}
                        >
                            {recent500.KD}
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        <span
                            style={{
                                color: clr(recent1000.KD, OS.frags / (OS.battles - OS.survived_battles)),
                            }}
                        >
                            {recent1000.KD}
                        </span>
                    </>
                ),
            },
            {
                name: "Damage Ratio",
                Overall: (OS.damage_dealt / OS.damage_received).toFixed(2),
                "24 Hours": (
                    <>
                        <span
                            style={{
                                color: clr(recent24hr.DMGratio, OS.damage_dealt / OS.damage_received),
                            }}
                        >
                            {recent24hr.DMGratio}
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        <span
                            style={{
                                color: clr(recent3days.DMGratio, OS.damage_dealt / OS.damage_received),
                            }}
                        >
                            {recent3days.DMGratio}
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        <span
                            style={{
                                color: clr(recent1week.DMGratio, OS.damage_dealt / OS.damage_received),
                            }}
                        >
                            {recent1week.DMGratio}
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        <span
                            style={{
                                color: clr(recent30days.DMGratio, OS.damage_dealt / OS.damage_received),
                            }}
                        >
                            {recent30days.DMGratio}
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        <span
                            style={{
                                color: clr(recent60days.DMGratio, OS.damage_dealt / OS.damage_received),
                            }}
                        >
                            {recent60days.DMGratio}
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        <span
                            style={{
                                color: clr(recent500.DMGratio, OS.damage_dealt / OS.damage_received),
                            }}
                        >
                            {recent500.DMGratio}
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        <span
                            style={{
                                color: clr(recent1000.DMGratio, OS.damage_dealt / OS.damage_received),
                            }}
                        >
                            {recent1000.DMGratio}
                        </span>
                    </>
                ),
            },
            {
                name: "Survived",
                Overall: (
                    <>
                        {OS.survived_battles}{" "}
                        <span style={{ float: "right" }}>{((OS.survived_battles * 100) / OS.battles).toFixed(2)}%</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.survived}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.survivedrate, (OS.survived_battles * 100) / OS.battles),
                            }}
                        >
                            {recent24hr.survivedrate}%
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.survived}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.survivedrate, (OS.survived_battles * 100) / OS.battles),
                            }}
                        >
                            {recent3days.survivedrate}%
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.survived}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.survivedrate, (OS.survived_battles * 100) / OS.battles),
                            }}
                        >
                            {recent1week.survivedrate}%
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.survived}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.survivedrate, (OS.survived_battles * 100) / OS.battles),
                            }}
                        >
                            {recent30days.survivedrate}%
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.survived}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.survivedrate, (OS.survived_battles * 100) / OS.battles),
                            }}
                        >
                            {recent60days.survivedrate}%
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.survived}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.survivedrate, (OS.survived_battles * 100) / OS.battles),
                            }}
                        >
                            {recent500.survivedrate}%
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.survived}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.survivedrate, (OS.survived_battles * 100) / OS.battles),
                            }}
                        >
                            {recent1000.survivedrate}%
                        </span>
                    </>
                ),
            },
            {
                name: "Detected",
                Overall: (
                    <>
                        {OS.spotted} <span style={{ float: "right" }}>{(OS.spotted / OS.battles).toFixed(2)}</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.spotted}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.spottedrate, OS.spotted / OS.battles),
                            }}
                        >
                            {recent24hr.spottedrate}
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.spotted}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.spottedrate, OS.spotted / OS.battles),
                            }}
                        >
                            {recent3days.spottedrate}
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.spotted}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.spottedrate, OS.spotted / OS.battles),
                            }}
                        >
                            {recent1week.spottedrate}
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.spotted}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.spottedrate, OS.spotted / OS.battles),
                            }}
                        >
                            {recent30days.spottedrate}
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.spotted}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.spottedrate, OS.spotted / OS.battles),
                            }}
                        >
                            {recent60days.spottedrate}
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.spotted}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.spottedrate, OS.spotted / OS.battles),
                            }}
                        >
                            {recent500.spottedrate}
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.spotted}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.spottedrate, OS.spotted / OS.battles),
                            }}
                        >
                            {recent1000.spottedrate}
                        </span>
                    </>
                ),
            },
            {
                name: "Cap Points",
                Overall: (
                    <>
                        {OS.capture_points}{" "}
                        <span style={{ float: "right" }}>{(OS.capture_points / OS.battles).toFixed(2)}</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.cap}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.caprate, OS.capture_points / OS.battles),
                            }}
                        >
                            {recent24hr.caprate}
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.cap}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.caprate, OS.capture_points / OS.battles),
                            }}
                        >
                            {recent3days.caprate}
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.cap}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.caprate, OS.capture_points / OS.battles),
                            }}
                        >
                            {recent1week.caprate}
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.cap}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.caprate, OS.capture_points / OS.battles),
                            }}
                        >
                            {recent30days.caprate}
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.cap}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.caprate, OS.capture_points / OS.battles),
                            }}
                        >
                            {recent60days.caprate}
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.cap}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.caprate, OS.capture_points / OS.battles),
                            }}
                        >
                            {recent500.caprate}
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.cap}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.caprate, OS.capture_points / OS.battles),
                            }}
                        >
                            {recent1000.caprate}
                        </span>
                    </>
                ),
            },
            {
                name: "Def Points",
                Overall: (
                    <>
                        {OS.dropped_capture_points}{" "}
                        <span style={{ float: "right" }}>{(OS.dropped_capture_points / OS.battles).toFixed(2)}</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.def}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.defrate, OS.dropped_capture_points / OS.battles),
                            }}
                        >
                            {recent24hr.defrate}
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.def}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.defrate, OS.dropped_capture_points / OS.battles),
                            }}
                        >
                            {recent3days.defrate}
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.def}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.defrate, OS.dropped_capture_points / OS.battles),
                            }}
                        >
                            {recent1week.defrate}
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.def}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.defrate, OS.dropped_capture_points / OS.battles),
                            }}
                        >
                            {recent30days.defrate}
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.def}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.defrate, OS.dropped_capture_points / OS.battles),
                            }}
                        >
                            {recent60days.defrate}
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.def}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.defrate, OS.dropped_capture_points / OS.battles),
                            }}
                        >
                            {recent500.defrate}
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.def}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.defrate, OS.dropped_capture_points / OS.battles),
                            }}
                        >
                            {recent1000.defrate}
                        </span>
                    </>
                ),
            },
            {
                name: "Experience",
                Overall: (
                    <>
                        {OS.xp} <span style={{ float: "right" }}>{(OS.xp / OS.battles).toFixed(2)}</span>
                    </>
                ),
                "24 Hours": (
                    <>
                        {recent24hr.xp}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent24hr.xprate, OS.battle_avg_xp),
                            }}
                        >
                            {recent24hr.xprate}
                        </span>
                    </>
                ),
                "3 Days": (
                    <>
                        {recent3days.xp}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent3days.xprate, OS.battle_avg_xp),
                            }}
                        >
                            {recent3days.xprate}
                        </span>
                    </>
                ),
                "7 Days": (
                    <>
                        {recent1week.xp}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1week.xprate, OS.battle_avg_xp),
                            }}
                        >
                            {recent1week.xprate}
                        </span>
                    </>
                ),
                "30 Days": (
                    <>
                        {recent30days.xp}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent30days.xprate, OS.battle_avg_xp),
                            }}
                        >
                            {recent30days.xprate}
                        </span>
                    </>
                ),
                "60 Days": (
                    <>
                        {recent60days.xp}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent60days.xprate, OS.battle_avg_xp),
                            }}
                        >
                            {recent60days.xprate}
                        </span>
                    </>
                ),
                "100 Games": (
                    <>
                        {recent500.xp}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent500.xprate, OS.battle_avg_xp),
                            }}
                        >
                            {recent500.xprate}
                        </span>
                    </>
                ),
                "1000 Games": (
                    <>
                        {recent1000.xp}
                        <span
                            style={{
                                float: "right",
                                color: clr(recent1000.xprate, OS.battle_avg_xp),
                            }}
                        >
                            {recent1000.xprate}
                        </span>
                    </>
                ),
            },
        ],
    };

    recentStats.graphData.overallWinrate = data.overallWinrate;
    recentStats.graphData.overallStats = data.overallStats;

    return recentStats.graphData;
}
