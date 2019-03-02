import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(props){

    const hp = props.homePage
    const proj = props.proj

    return(
        <div>
        <section className="container">
            <header className="head">
                <h1>Brendan Woodell</h1>
                <div id="contactlinks">
                    <a href="https://github.com/Beamer92" id ="GitHub">
                        <img alt='' src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" className='iconStyles'/>
                    </a>
                    <a href="https://www.linkedin.com/in/brendan-woodell-6a4ba385/" id="LinkedIn">
                        <img alt='' src="http://www.vhtrucks.com/wp-content/uploads/2018/01/linkedin-logo.png" className='iconStyles'/>
                    </a>
                </div>
            </header>
            <div id="D20">
                <img src={require("./imgs/d20bl.jpg")} alt={''} className="grow" />
                <img src={require("./imgs/d20re.jpg")} alt={''} className="grow" />
                <img src={require("./imgs/d20gr.jpg")} alt={''} className="grow" />
                <img src={require("./imgs/d20pi.jpg")} alt={''} className="grow" />
                <img src={require("./imgs/d20b2.jpg")} alt={''} className="grow" />
            </div>
            <h4>About Me</h4>
            <article className="bx b row">
                <div className="col" id='abt'>
                    {hp.aboutMe.map((x, idx) => <div key={idx} className='padBot'>{x}</div>)}
                </div>
                <span className="col-2"></span>
                <img className="col" id="face" alt={''} src={require("./imgs/headshot.jpg")}/>
            </article>
            <article className="bx">
                <h4>What I'm Working On</h4>
                {hp.workingOn.map((x, idx) => <div key={'w'+idx}><strong>{x.title+': '}</strong>{x.body}</div>)}
            </article>
            <br/><br/>
            <h4>Projects</h4>
                <article className="flexbox row">
                    <ul className="col proj">
                        {proj.map((x, idx) => <li key={x.title}><Link to={'p'+idx}>{x.title+': '}</Link>{x.blurb}</li>)}
                    </ul>
                </article>
            </section>
        </div>
    )
}