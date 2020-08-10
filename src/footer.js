import React from 'react'
import './css/footer.css'

import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Footer() {

    return (
        <div className="footer">
            Tomato.gg is a website created by <Link to='stats/NA/goldflag=1011694618'>Goldflag</Link> and is not affiliated with Wargaming.net. World of Tanks is a trademark of <a href="wargaming.net">Wargaming.net</a>.
        </div>
    );
}

export default Footer;
