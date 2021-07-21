import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

export function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box padding={0}>{children}</Box>}
        </div>
    );
}

export const CustomTabs = withStyles({
    root: {
        elevation: 10,
        backgroundColor: "rgb(76, 90, 166)",
    },
    indicator: {
        display: "flex",
        justifyContent: "center",
        "& > span": {
            maxWidth: 40,
            width: "100%",
            backgroundColor: "rgb(214, 43, 97)",
        },
    },
})(Tabs);

export const CustomTab = withStyles((theme) => ({
    root: {
        textTransform: "none",
        minWidth: 90,
        fontWeight: 600,
        padding: "0rem 1rem",
        fontFamily: "Segoe UI, Futura",
        color: "rgb(250, 250, 250)",
        "&:focus": {
            opacity: 1,
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

export const CustomTabsV2 = withStyles({
    root: {
        elevation: 10,
        borderBottom: "1px solid rgb(200, 200, 200)",
    },
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(200, 200, 200)",
    },
})(Tabs);

export const CustomTabV2 = withStyles((t) => ({
    root: {
        textTransform: "none",
        fontWeight: 600,
        fontSize: "0.9rem",
        marginRight: t.spacing(4),
        fontFamily: "Segoe UI, Futura",
        color: "rgb(240, 240, 240)",
        "&:hover": {
            color: "rgb(142, 147, 245)",
            opacity: 1,
        },
        "&$selected": {
            color: "rgb(191, 185, 250)",
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);