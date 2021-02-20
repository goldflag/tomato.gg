import React, { useState } from "react";
import TreemapOverall from "./treemapOverall";
import { ThemeContext } from "../../../context";
import {
    FilterButtonGroup,
    FilterButton,
} from "../../../components/tableFilters";
import styled from "styled-components";

const Styles = styled.div`
    height: "900px";
    .filters {
        margin-bottom: -10px;
    }
`;

export default function Treemap(props) {
    const { theme } = React.useContext(ThemeContext);

    const [data, setData] = useState(props.data.overall);
    const [type, setType] = useState("Overall");

    return (
        <Styles>
            <div className="filters">
                    <FilterButtonGroup>
                        <FilterButton
                            key={"overall"}
                            selected={type === "Overall"}
                            onClick={() => {
                                setData(props.data.overall);
                                setType("Overall");
                            }}
                        >
                            Overall
                        </FilterButton>                
                        <FilterButton
                            key={30}
                            selected={type === "30 Days"}
                            onClick={() => {
                                setData(props.data.recent30);
                                setType("30 Days");

                            }}
                        >
                            30 Days
                        </FilterButton>  
                        <FilterButton
                            key={60}
                            selected={type === "60 Days"}
                            onClick={() => {
                                setData(props.data.recent60);
                                setType("60 Days");

                            }}
                        >
                            60 Days
                        </FilterButton>   
                    </FilterButtonGroup>
                </div>
            <TreemapOverall data={data} type={type}/>
        </Styles>
    );
}
