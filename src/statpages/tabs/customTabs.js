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


