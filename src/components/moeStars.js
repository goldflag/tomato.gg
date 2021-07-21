import React from "react";

const sizeConv = {
    large: "50px",
    medium: "32px",
    small: "16px"
};

export const MoEStars = ({ marks, size = "small" }) =>
    Array(marks)
        .fill(null)
        .map((_, i) => (
            <img key={i} src={require(`Assets/star.png`)} style={{ maxHeight: sizeConv[size]}} alt={`${marks} marked`} />
        ));
