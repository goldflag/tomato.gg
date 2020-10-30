import React from 'react';
import tankNames from '../../../data/tankNames.json';
import { ThemeContext } from '../../../style/theme.js';

export default function Records(props) {
    const {theme} = React.useContext(ThemeContext);

    const demo = {
        borderWidth: '1px 0px 1px 0px',
        borderStyle: 'solid',
        borderColor: theme === 'dark' ? 'rgb(100, 100, 100)' : 'rgb(220,220,220)',
		borderCollapse: 'collapse',
        padding: 5,
        fontSize: '1rem',
        width: '100%',
        height: '300px',
        color: theme === 'dark'? 'rgb(240,240,240)' : 'rgb(40, 40, 40)',
    }

    const td = {
        borderWidth: '1px 0px 1px 0px',
        borderStyle: 'solid',
        borderColor: theme === 'dark' ? 'rgb(100, 100, 100)' : 'rgb(220,220,220)',
        maxheight: '50px',
        padding: '11.4px',
    }

    const tdc = {
        borderWidth: '1px 0px 1px 0px',
        borderStyle: 'solid',
        borderColor: theme === 'dark' ? 'rgb(100, 100, 100)' : 'rgb(220,220,220)',
        maxheight: '50px',
        padding: '11.4px',
        background: theme === 'dark' ? 'rgb(50, 50, 50)' : 'rgb(242, 243, 247)'
    }

    let res = <></>;
    if (props.data.max_damage_tank_id in tankNames && props.data.max_frags_tank_id in tankNames  && props.data.max_xp_tank_id in tankNames ) {
        res = <table style={demo}>
        <tbody>
            <tr>
                <td style={tdc}>Max Damage <span style={{ float: 'right'}}>{props.data.max_damage}<span style={{ color: 'rgb(120,120,120)' }}> in {tankNames[props.data.max_damage_tank_id].short_name}</span></span></td>
            </tr>
            <tr>
                <td style={td}>Max Kills <span style={{ float: 'right'}}>{props.data.max_frags}<span style={{ color: 'rgb(120,120,120)' }}> in {tankNames[props.data.max_frags_tank_id].short_name}</span></span></td>
            </tr>
            <tr>
                <td style={tdc}>Max XP <span style={{ float: 'right'}}>{props.data.max_xp}<span style={{ color: 'rgb(120,120,120)' }}> in {tankNames[props.data.max_xp_tank_id].short_name} </span></span></td>
            </tr>
            <tr>
                <td style={td}>Avg Assist <span style={{ float: 'right'}}>{props.data.avg_damage_assisted} </span></td>
            </tr>
            <tr>
                <td style={tdc}>Avg Spot Assist <span style={{ float: 'right'}}>{props.data.avg_damage_assisted_radio} </span></td>
            </tr>
            <tr>
                <td style={td}>Avg Tracking Assist <span style={{ float: 'right'}}>{props.data.avg_damage_assisted_track}</span></td>
            </tr>
            <tr>
                <td style={tdc}>Armor-use Efficiency <span style={{ float: 'right'}}>{props.data.tanking_factor}</span></td>
            </tr>
        </tbody>
    </table>
    }

    return (
        <>
            {res}
        </>
    );
}