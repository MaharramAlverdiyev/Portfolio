import React from 'react'
import { IoLocation } from "react-icons/io5";
import '../SectionTwo/sectiontwo.css'
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiRecycleFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

export const SectionTwo = () => {
    
    return (
        <div className='sec-two'>
            <div className="sec-two-column" id="about">
                <h1 style={{ textAlign: 'center' }}>About me</h1>
                <div className="about" >
                    <div className="about-container">
                        <div className="about-me">
                            <h2 className='about-me-title' style={{ fontSize: '30px' }}>Junior Strong Front-end Developer in Baku <IoLocation style={{ color: 'red' }} /></h2>
                            <p className='about-me-p'>Hey, my name is Maharram. I'm 22, and I'm a Frontend Developer. My first mission is to create and develop a clean Web Site.</p>
                            <p className='about-me-p'>My main stack currently is React.js, Redux in combination with Tailwind CSS and Material</p>
                        </div>
                        <div className="about-center">
                            <div className="about-center-left">
                                <p className='about-center-p'><h3 className='about-center-h3'><FaLaptopCode className='about-center-icons' />Development:</h3>Learning new things and using them on websites</p>
                                <p className='about-center-p'><h3 className='about-center-h3'><HiOutlineLightBulb className='about-center-icons' />Problem Solving:</h3> Effectively solve coding challenges
                                    ability to solve.</p>
                            </div>
                            <div className="about-center-right">
                                <p className='about-center-p'><h3 className='about-center-h3'><RiRecycleFill className='about-center-icons' />Adaptability:</h3> Quickly learn and adapt to new technologies
                                    ability to adapt.</p>
                                <p className='about-center-p'><h3 className='about-center-h3'><FaPeopleGroup className='about-center-icons' />Teamwork:</h3> Strong team member, open to feedback.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
