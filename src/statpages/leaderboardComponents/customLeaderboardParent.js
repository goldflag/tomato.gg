import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import CustomLeaderboard from './customLeaderboard';
import Button from '@material-ui/core/Button';

export default function CustomLeaderboardParent(props) {

    const selectField = {
        display: 'grid',
        gridTemplateColumns: '20% 40% 40%',
        background: 'white',
        padding: '1rem'
    };

    const individualField = {
        padding: '1rem'
    };

    const minMax = {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        padding: '0.5rem 0'
    };
    const handleChangeEntries = (event, newValue) => {
        setNumEntries(newValue);
    };
    const handleChangeTier = (event, newValue) => {
        setTierRange(newValue);
    };
    const [numEntries, setNumEntries] = useState(1000);
    const [customType, setCustomType] = useState('wn8');
    const [tierRange, setTierRange] = useState([1, 10]);
    const [minbattles, setMinbattles] = useState(0);
    const [maxbattles, setMaxbattles] = useState(999999);
    const [minWN8, setMinWN8] = useState(0);
    const [maxWN8, setMaxWN8] = useState(999999);
    const [minWR, setMinWR] = useState(0);
    const [maxWR, setMaxWR] = useState(100);

    const [leaderboard, setLeaderboard] = useState(<></>);
    const [generated, setGenerated] = useState(false);

    function GenerateLeaderboard() {

        setGenerated(true);
        // console.log('fic');
        // setLeaderboard(<></>);
        // setLeaderboard(<>
        //     <CustomLeaderboard type={customType} count={numEntries} mintier={tierRange[0]} maxtier={tierRange[1]} 
        //     minbattles={minbattles} maxbattles={maxbattles} minWN8={minWN8} maxWN8={maxWN8} minwinrate={minWR} maxwinrate={maxWR}/>
        // </>);
    }



    // ${props.type}/${props.count}/${props.mintier}/${props.maxtier}/${props.minbattles}/${props.maxbattles}/${props.minwn8}/${props.maxwn8}/${props.minwinrate}/${props.maxwinrate}`;

    if (generated) {
        setLeaderboard(<>
            <CustomLeaderboard type={customType} count={numEntries} mintier={tierRange[0]} maxtier={tierRange[1]}
                minbattles={minbattles} maxbattles={maxbattles} minWN8={minWN8} maxWN8={maxWN8} minwinrate={minWR} maxwinrate={maxWR} />
        </>);
        setGenerated(false);
    }

    return (
        <>
            <div style={selectField}>
                <div className='individualField'>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Order By</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={customType} onChange={e => setCustomType(e.target.value)}>
                            <FormControlLabel value="wn8" control={<Radio />} label="WN8" />
                            <FormControlLabel value="winrate" control={<Radio />} label="Winrate" />
                            <FormControlLabel value="battles" control={<Radio />} label="Battles" />
                            <FormControlLabel value="moecount" control={<Radio />} label="3 MoE" />
                            <FormControlLabel value="pr" control={<Radio />} label="PR" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div style={individualField}>
                    Avg Tier Range
                    <Slider
                        defaultValue={tierRange}
                        onChange={handleChangeTier}
                        valueLabelDisplay="auto"
                        step={1} marks min={1} max={10} />
                    <div style={minMax}>
                        <div>
                            <TextField
                                defaultValue={minbattles} id="standard-number"
                                onChange={e => setMinbattles(e.target.value)}
                                label="Min Battles" InputLabelProps={{ shrink: true }} />
                        </div>
                        <div>
                            <TextField
                                defaultValue={maxbattles} id="standard-number"
                                onChange={e => setMaxbattles(e.target.value)}
                                label="Max Battles" InputLabelProps={{ shrink: true }} />
                        </div>
                    </div>
                    <div style={minMax}>
                        <div>
                            <TextField
                                defaultValue={minWN8} id="standard-number"
                                onChange={e => setMinWN8(e.target.value)}
                                label="Min WN8" InputLabelProps={{ shrink: true }} />
                        </div>
                        <div>
                            <TextField
                                defaultValue={maxWN8} id="standard-number"
                                onChange={e => setMaxWN8(e.target.value)}
                                label="Max WN8" InputLabelProps={{ shrink: true }} />
                        </div>
                    </div>
                    <div style={minMax}>
                        <div>
                            <TextField
                                defaultValue={minWR} id="standard-number"
                                onChange={e => setMinWR(e.target.value)}
                                label="Min Winrate" InputLabelProps={{ shrink: true }} />
                        </div>
                        <div>
                            <TextField
                                defaultValue={maxWR} id="standard-number"
                                onChange={e => setMaxWR(e.target.value)}
                                label="Max Winrate" InputLabelProps={{ shrink: true }} />
                        </div>
                    </div>
                    Number of Entries
                    <Slider
                        defaultValue={numEntries}
                        onChange={handleChangeEntries}
                        valueLabelDisplay="auto"
                        step={100} min={0} max={100000} />
                </div>
                <Button variant="contained" color="primary" style={{ margin: '2rem' }} onClick={GenerateLeaderboard}>
                    Generate Leaderboard
                </Button>
            </div>
            {leaderboard}
        </>
    );
}