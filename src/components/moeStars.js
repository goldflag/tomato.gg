import React from "react";

export const MoEStars = ({ marks }) =>
    Array(marks)
        .fill(null)
        .map((_, i) => (
            <img key={i} src={require(`../assets/star.png`)} style={{ maxHeight: "16px" }} alt={`${marks} marked`} />
        ));
