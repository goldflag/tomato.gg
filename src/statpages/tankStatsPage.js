import React from "react";
import Table from './tankStatsPageComponents/table';
import "../css/tankstats.css";

export default function TankStatsPage(props) {
    return (
        <div style = {{padding: '2em', paddingTop: '5em'}}>
          <Table/>
        </div>
    );
}

