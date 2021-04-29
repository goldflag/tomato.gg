// NPM
import React, { useState } from "react";
import { Slider, Typography } from "@material-ui/core";
import { useTable } from "react-table";
import { Helmet } from "react-helmet";

// LOCAL
import { prBounds, PRColor, rankBounds, rankColor, wn8Bounds, WN8Color, wrBounds, WRColor } from "Styling/colors";
import { FullPageTableWrapper, Info, StyledTable, TableContainer } from "Components";
import { Capital, commonStrings } from "Data/localizations";
import LocalizedStrings from "Functions/localizedStrings";

const { ...strings } = LocalizedStrings({
    en: {
        colorScales: "Color Scales",
        increments: "Increments",
        linear: "Linear",
        cosine: "Cosine",
    },
    cs: {
        colorScales: "Barevné stupnice",
        increments: "Navýšení",
        linear: "Lineární",
        cosine: "Kosinus",
    },
    de: {
        colorScales: "Farbschema",
        increments: "Abstufungen",
        linear: "Linear",
        cosine: "Cosinus",
    },
    es: {
        colorScales: "Escalas de Color",
        increments: "Incrementos",
        linear: "Lineal",
        cosine: "Coseno",
    },
    fr: {
        colorScales: "Échelles de couleurs",
        increments: "Incréments",
        linear: "Linéaire",
        cosine: "Cosinus",
    },
    hr: {
        colorScales: "Ljestvica boja",
        increments: "Priraštaji",
        linear: "Linearno",
        cosine: "Kosinus",
    },
    nl: {
        colorScales: "Kleurschaal",
        increments: "Stappen",
        linear: "Lineair",
        cosine: "Cosinus",
    },
    pl: {
        colorScales: "Skala kolorów",
        increments: "Ilość stopni",
        linear: "Liniowa",
        cosine: "Cosinus",
    },
    tr: {
        colorScales: "Renk şeması",
        increments: "Artış",
        linear: "Doğrusal",
        cosine: "Kosinüs",
    },
    zh: {
        colorScales: "顏色分級",
        increments: "向右增量",
        linear: "Linear",
        cosine: "Cosine",
    },
});

const ColorScales = () => {
    const [increments, setIncrements] = useState(30);

    const colorIncrements = React.useMemo(
        () =>
            [
                ["WN8", wn8Bounds, WN8Color, Math.round],
                ["wr", wrBounds, WRColor, (n) => n.toFixed(1)],
                ["PR", prBounds, PRColor, Math.round],
                ["rank", rankBounds, rankColor, (n) => n.toFixed(1)],
            ].map(([name, bounds, colorFn, postFn]) => [
                name,
                Array(increments)
                    .fill(0)
                    .map((_, i, arr) => postFn(bounds[0] * (1 - i / arr.length) + (bounds[1] * i) / arr.length))
                    .reverse(),
                colorFn,
            ]),
        [increments]
    );

    const columns = React.useMemo(
        () =>
            colorIncrements.map(([name, , colorFn]) => ({
                id: name,
                Header: <b>{commonStrings[name] ? Capital(commonStrings[name]) : name}</b>,
                columns: [
                    {
                        id: `${name}_linear`,
                        Header: strings.linear,
                        accessor: name,
                        Cell: ({ value }) => <td style={{ backgroundColor: colorFn(value, false) }}>{value}</td>,
                    },
                    {
                        id: `${name}_smoothed`,
                        Header: strings.cosine,
                        accessor: name,
                        Cell: ({ value }) => <td style={{ backgroundColor: colorFn(value, true) }}>{value}</td>,
                    },
                ],
            })),
        [colorIncrements]
    );

    const data = React.useMemo(
        () =>
            colorIncrements.reduce(
                (rows, currScale) => {
                    const [name, values] = currScale;
                    console.log(currScale);
                    return rows.map((row, i) => ({ ...row, [name]: values[i] }));
                },
                Array(increments)
                    .fill(0)
                    .map(() => ({}))
            ),
        [increments, colorIncrements]
    );

    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } = useTable({ columns, data });

    return (
        <FullPageTableWrapper>
            <Helmet>
                <title>{strings.colorScales} - Tomato.gg</title>
            </Helmet>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>{strings.colorScales}</span>
                <br />
                <br />
                <Typography id="increment-slider">{strings.increments}</Typography>
                <Slider
                    defaultValue={20}
                    aria-labelledby="increment-slider"
                    step={5}
                    marks
                    min={10}
                    max={200}
                    valueLabelDisplay="auto"
                    onChange={(_, val) => setIncrements(val)}
                />
            </Info>
            <TableContainer>
                <StyledTable {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(({ columns, ...column }) => (
                                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row);
                            return <tr>{row.cells.map((cell) => cell.render("Cell"))}</tr>;
                        })}
                    </tbody>
                </StyledTable>
            </TableContainer>
        </FullPageTableWrapper>
    );
};

export default ColorScales;
