import React from 'react';
import tankNames from '../../../data/tankNames';

export default function Records(props) {
    const demo = {
        borderWidth: '1px 0px 1px 0px',
        borderStyle: 'solid',
        borderColor: 'rgb(220,220,220)',
		borderCollapse: 'collapse',
        padding: 5,
        fontSize: '1rem',
        width: '100%',
    }
    const th = {
        borderWidth: '(1px 0px 1px 0px)',
        borderStyle: 'solid',
        borderColor: 'rgb(220,220,220)',
        padding: 5,
		background: '#F0F0F0',
    }

    const td = {
        borderWidth: '1px 0px 1px 0px',
        borderStyle: 'solid',
        borderColor: 'rgb(220,220,220)',
        padding: 12,
    }

    const td2 = {
        borderWidth: '1px 0px 1px 0px',
        borderStyle: 'solid',
        borderColor: 'rgb(220,220,220)',
        padding: 12,
        textAlign: 'right'

    }
    const tdc = {
        borderWidth: '1px 0px 1px 0px',
        borderStyle: 'solid',
        borderColor: 'rgb(220,220,220)',
        padding: 12,
        background: 'rgb(242, 243, 247)'
    }

    const td2c = {
        borderWidth: '1px 0px 1px 0px',
        borderStyle: 'solid',
        borderColor: 'rgb(220,220,220)',
        padding: 12,
        background: 'rgb(242, 243, 247)',
        textAlign: 'right'
    }

    return (
        <>
            <table style={demo}>
                <tbody>
                    <tr>
                        <td style={tdc}>Maximum Damage</td>
                        <td style={td2c}>{props.data.max_damage} <span style={{ color: 'rgb(120,120,120)' }}> in {tankNames[props.data.max_damage_tank_id].short_name}</span></td> </tr>
                    <tr>
                        <td style={td}>Maximum Kills</td>
                        <td style={td2}>{props.data.max_frags} <span style={{ color: 'rgb(120,120,120)' }}> in {tankNames[props.data.max_frags_tank_id].short_name}</span></td>
                    </tr>
                    <tr>
                        <td style={tdc}>Maximum XP</td>
                        <td style={td2c}>{props.data.max_xp} <span style={{ color: 'rgb(120,120,120)' }}> in {tankNames[props.data.max_xp_tank_id].short_name} </span></td>
                    </tr>
                    <tr>
                        <td style={td}>Average Assist</td>
                        <td style={td2}>{props.data.avg_damage_assisted}</td>
                    </tr>
                    <tr>
                        <td style={tdc}>Average Spot Assist </td>
                        <td style={td2c}>{props.data.avg_damage_assisted_radio}</td>
                    </tr>
                    <tr>
                        <td style={td}>Average Tracking Assist</td>
                        <td style={td2}>{props.data.avg_damage_assisted_track}</td>
                    </tr>
                    <tr>
                        <td style={tdc}>Armor-use Efficiency</td>
                        <td style={td2c}>{props.data.tanking_factor}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}