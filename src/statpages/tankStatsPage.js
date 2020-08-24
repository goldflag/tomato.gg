import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from './tankStatsPageComponents/table';
import "../css/tankstats.css";

export default function TankStatsPage(props) {
    
    // Runs once when component mounts
    useEffect(() => {
    }, []);

  

    let StatTable = <><Table/></>

    
    return (
        <div style = {{padding: '2em', paddingTop: '5em'}}>
          {StatTable}
        </div>
    );
}

