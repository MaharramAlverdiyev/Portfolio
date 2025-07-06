import React from 'react'
import './sectionfour.css'
import irshad from "../../Images/irshad-electronics.png"

export const SectionFour = () => {
  return (
    <div className='sec-four' id='project'>
        <h1>Projects</h1>
        <div className="sec-four-container">
            <div className="sec-four-card">
                <img src={irshad} alt="" />
                <h3>Irshad Electronics w / clone</h3>
                <p>React + Vite + Tailwind.css + Javascript + Redux Toolkit</p>
                <div className="buttons">
                    <a href='https://irshad-electronics.vercel.app/'>Live</a>
                    <a href='https://github.com/MaharramAlverdiyev/IrshadElectronics-teamwork'>Github</a>
                </div>
            </div>
        </div>
    </div>
  )
}
