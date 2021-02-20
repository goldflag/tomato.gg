import React from "react";
import loader from "../assets/loading.svg";
import styled from "styled-components";

const Styles = styled.div`
    .loader {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${({top}) => top}% 0% ${({bottom}) => bottom}% 0%;
        background-color: ${({color}) => color};
    }
    .loadingCircle {
        max-width: 75px;
    }
`;

export default function Loader(props) {
    return (
        <Styles top={props.top} bottom={props.bottom} color={props.color}>
            <div className="loader">
                <img src={loader} alt="loader" className="loadingCircle"></img>
            </div>
        </Styles>
    );
}