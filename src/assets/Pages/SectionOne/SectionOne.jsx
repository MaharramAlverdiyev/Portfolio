import React, { useEffect, useState, useRef } from 'react'
import MaharramAlverdiyev from "../../Images/MaharramAlverdiyev.png";
import './sectionone.css'
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const SectionOne = () => {
    const [text, setText] = useState("");  
    const [isDeleting, setIsDeleting] = useState(false);  
    const [isCollapsed, setIsCollapsed] = useState(false);  
    const fullText = "Front-end Developer";  
    const typingSpeed = 200;  
    const deletingSpeed = 100;  
    const delayBeforeDeleting = 600;  

    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Typing effect
    useEffect(() => {
        let timer;
        if (!isDeleting && text !== fullText) {
            if (text.length === 1) setIsCollapsed(false);
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length + 1));
            }, typingSpeed);
        } else if (isDeleting && text !== "") {
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length - 1));
            }, deletingSpeed);
        } else if (!isDeleting && text === fullText) {
            timer = setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
        } else if (isDeleting && text === "") {
            setIsCollapsed(true);
            timer = setTimeout(() => setIsDeleting(false), delayBeforeDeleting);
        }
        return () => clearTimeout(timer);
    }, [text, isDeleting]);

    // Intersection Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // animasiya yalnız bir dəfə olsun deyə
                }
            },
            { threshold: 0.3 }
        );
        if (imageRef.current) observer.observe(imageRef.current);
    }, []);

    return (
        <div className='sec-one' id='home'>
            <div className="sec-one-column">
                <div className="sec-one-left">
                    <div className={`left-text ${isCollapsed ? "collapsed" : ""}`}>
                        <h4>Hi, I am</h4>
                        <h1>Maharram Alverdiyev</h1>
                        <h4 className='h4'>{text}</h4>
                    </div>
                    <div className={`left-icons ${isCollapsed ? "collapsed" : ""}`}>
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><MdOutlineAlternateEmail /></a>
                    </div>
                </div>
                <div className="sec-one-right">
                    <img
                        ref={imageRef}
                        src={MaharramAlverdiyev}
                        alt="Maharram Alverdiyev"
                        className={isVisible ? "animate-in" : "hidden-right"}
                    />
                </div>
            </div>
        </div>
    );
}
