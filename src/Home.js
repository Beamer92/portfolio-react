import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'

export default function Home(props){

    const hp = props.homePage
    const proj = props.proj

    return(
        <div>
            <section className="container">
            <Header path='home'/>
            <h4>About Me</h4>
            <article className="bx row">
                <div className="col" id='abt'>
                    {hp.aboutMe.map((x, idx) => <p key={idx} className='padBot'>{x}</p>)}
                </div>
                <span className="col-2"></span>
                <img className="col" id="face" alt={''} src={require("./imgs/headshot.jpg")}/>
            </article>
            <h4>What I'm Working On</h4>
            <article className="bx row">
                <div className='col'>
                    {hp.workingOn.map((x, idx) => <div key={'w'+idx}><strong>{x.title+': '}</strong>{x.body}</div>)}
                </div>
            </article>
            <h4>Projects</h4>
                <article className="bx row">
                    <ul className="col proj">
                        {proj.map((x, idx) => <li key={x.title}><Link to={'p'+idx}>{x.title+': '}</Link>{x.blurb}</li>)}
                    </ul>
                </article>
            </section>
        </div>
    )
}