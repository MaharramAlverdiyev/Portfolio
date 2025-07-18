import React from 'react'
import "./sectionfive.css"
import { IoLocation } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CVResume from "../../Components/CV-file/MaharramAlverdiyev_CV.pdf"

export const SectionFive = () => {
    return (
        <div className='sec-five' id='contact'>
            <h1>Contact</h1>
            <div className="contact-buttons">
                <a className='CV-button' href={CVResume} download > Download my CV </a>
                <a className='CV-button' href="https://mail.google.com/mail/?view=cm&fs=1&to=maharramalverdiyev890@gmail.com" 
                target="_blank" rel="noopener noreferrer"> Contact with me </a>
            </div>
        
            <div className="sec-five-container">
                <div className="contact">
                    <div className="card-one">
                        <IoLocation className='contact-icons' />
                        <div className="card-text">
                            <h3>Location</h3>
                            <p>Baku, Azerbaijan</p>
                        </div>
                    </div>
                    <div className="card-two">
                        <IoMdMailOpen className='contact-icons' />
                        <div className="card-text">
                            <h3>Mail</h3>
                            <p>maharramalverdiyev890@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="card-one">
                        <FaGithub className='contact-icons' />
                        <div className="card-text">
                            <h3>Github</h3>
                            <p>github.com/MaharramAlverdiyev</p>
                        </div>
                    </div>
                    <div className="card-two">
                        <FaLinkedin className='contact-icons' />
                        <div className="card-text">
                            <h3>LinkedIn</h3>
                            <p>https://www.linkedin.com/in/maharram-alverdiyev-39b480313/</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
