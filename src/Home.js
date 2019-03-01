import React from 'react'
import Link from 'react-router'
import ProjBlurb from './ProjBlurb'
var data = require('./projects.json')

export default function Home(props){

    const abtme = Object.values(data.homePage.aboutMe)

    const imgStyles = {
        width: '20px',
        height: '20px'
    }

    const padBot = {
        paddingBottom: '1em'
    }

    return(
        <div>
        <section className="container">
            <header className="flexbox head">
                <h1>Brendan Woodell</h1>
                <div id="contactlinks">
                    {/* <a href="https://github.com/Beamer92" id ="GitHub"><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" style="width:25px; height:25px;"></a> */}
                    {/* <a href="https://www.linkedin.com/in/brendan-woodell-6a4ba385/" id="LinkedIn"><img src="http://www.vhtrucks.com/wp-content/uploads/2018/01/linkedin-logo.png" style="width:25px; height:25px;"></a> */}
                </div>
            </header>
            <div id="D20" className="flexbox">
                <img src={require("./imgs/d20bl.jpg")} alt={''} className="grow" style={imgStyles}/>
                <img src={require("./imgs/d20re.jpg")} alt={''} className="grow" style={imgStyles}/>
                <img src={require("./imgs/d20gr.jpg")} alt={''} className="grow" style={imgStyles}/>
                <img src={require("./imgs/d20pi.jpg")} alt={''} className="grow" style={imgStyles}/>
                <img src={require("./imgs/d20b2.jpg")} alt={''} className="grow" style={imgStyles}/>
            </div>

            <h4>About Me</h4>
            <article className="flexbox bx b row"><br/>
                <div className="col">
                    {abtme.map((x, idx) => <div key={idx} style={padBot}>{x}</div>)}
                </div>
                <span className="col-2"></span>
                <img className="col" id="face" alt={''} src={require("./imgs/headshot.jpg")}/>
            </article>
            <article className="bx">
                <h4>What I'm Working On</h4>
                {/* what i'm WORKING ON HERE */}
            </article>
            <br/><br/>
            <h4>Projects</h4>
                <article className="flexbox row">
                    <br/>
                    <ul className="col proj">
                        {/* <li><a href="Hangman.html">Hangman Game: </a>For the October 2017 Hacktoberfest I created a visual, console hangman game with Python</li> */}
                        {/* <li><a href="adventurePuzzle.html">Adventure Puzzle Game: </a>Placeholder text for a project in the future something something darkside</li> */}
                         {/* <li><a href="project2.html">Project2: </a>Placeholder text for a project in the future something something darkside</li>  */}
                    </ul>
                    <img className="col" id="pro" alt={''} src={require("./imgs/code.png")}/>
                </article>
            </section>
        </div>
    )
}