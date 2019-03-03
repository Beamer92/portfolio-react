import React from 'react'
import Header from './Header'

export default function Project(props){
    const {challenges, deployment, exp2, explanation, github, goals, img, outcome, title} = props.projData

    console.log(props)
    return (
       <div>
           <section className='container-fluid'>
                <Header path='proj'/>
                <h4>{title}</h4>
                <article className='bx row'>
                {deployment ? <div className='col'><a href={deployment}>Deployed Site</a></div> : null}
                <div className='col'><a href={github}>Github Repo</a></div>
                </article>

                <article className='bx row'>
                    <p className='projp'>{explanation}</p>
                    {exp2 ? <p className='projp'>{exp2}</p> : null}
                </article>
                
                <article className='bx row'>
                { goals.length > 0 ? <div className='col gc'>
                <h5>Goals</h5>
                <ul>
                    {goals.map((x, idx) =><li key={'g'+idx}>{x}</li>)}
                </ul>
                </div> : null}

                { challenges.length > 0 ? <div className='col gc'>
                <h4>Challenges</h4>
                <ul>
                    {challenges.map((x, idx) =><li key={'c'+idx}>{x}</li>)}
                </ul>
                </div> : null}
                </article>

                <div className='row imgrw'>
                <img alt='' src={img}/>
                </div>

                <h5>Outcome</h5>
                <article className='bx row'>
                    <p className='projp'>{outcome}</p>
                </article>

           </section>
       </div> 
    )
}