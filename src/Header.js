import React from 'react'
import {Link} from 'react-router-dom'

export default function Headers(props) {
    return (
        <div>
            <header className="head">
            <h1>Brendan Woodell</h1>
            <div id="contactlinks">
                <a href="https://github.com/Beamer92" id ="GitHub">
                    <img alt='' src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" className='iconStyles'/>
                </a>
                <a href="https://www.linkedin.com/in/brendan-woodell-6a4ba385/" id="LinkedIn">
                    <img alt='' src="http://www.vhtrucks.com/wp-content/uploads/2018/01/linkedin-logo.png" className='iconStyles'/>
                </a>
                {(props.path === 'proj') ? <Link to='/' id='Home'><img alt='' src="https://image.freepik.com/iconen-gratis/thuis_318-42210.jpg" className='iconStyles'/></Link> : null}
            </div>
            </header>
            <div id="D20">
                <img src={require("./imgs/d20bl.jpg")} alt={''} className="grow" />
                <img src={require("./imgs/d20re.jpg")} alt={''} className="grow" />
                <img src={require("./imgs/d20gr.jpg")} alt={''} className="grow" />
                <img src={require("./imgs/d20pi.jpg")} alt={''} className="grow" />
                <img src={require("./imgs/d20b2.jpg")} alt={''} className="grow" />
            </div>
        </div>
    )
}