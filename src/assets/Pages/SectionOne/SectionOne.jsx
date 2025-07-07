import React, { useEffect, useState, useRef } from 'react'
import MaharramAlverdiyev from "../../Images/MaharramAlverdiyev.png"
import './sectionone.css'
import { FaGithub } from "react-icons/fa"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

export const SectionOne = () => {
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const fullText = "Front-end Developer"
    const typingSpeed = 200
    const deletingSpeed = 100
    const delayBeforeDeleting = 600

    const imageRef = useRef(null)
    const leftRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let timer
        if (!isDeleting && text !== fullText) {
            if (text.length === 1) setIsCollapsed(false)
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length + 1))
            }, typingSpeed)
        } else if (isDeleting && text !== "") {
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length - 1))
            }, deletingSpeed)
        } else if (!isDeleting && text === fullText) {
            timer = setTimeout(() => setIsDeleting(true), delayBeforeDeleting)
        } else if (isDeleting && text === "") {
            setIsCollapsed(true)
            timer = setTimeout(() => setIsDeleting(false), delayBeforeDeleting)
        }
        return () => clearTimeout(timer)
    }, [text, isDeleting])

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )
        if (imageRef.current) observer.observe(imageRef.current)
        if (leftRef.current) observer.observe(leftRef.current)
    }, [])

    return (
        <div className='sec-one' id='home'>
            <div className="sec-one-column">
                <div className={`sec-one-left ${isVisible ? "visible" : ""}`} ref={leftRef}>
                    <div className={`left-text ${isCollapsed ? "collapsed" : ""}`}>
                        <h4>Hi, I am</h4>
                        <h1>Maharram Alverdiyev</h1>
                        <div className="h4-wrapper">
                            <h4 className='h4'>{text}</h4>
                        </div>
                    </div>
                    <div className={`left-icons ${isCollapsed ? "collapsed" : ""}`}>
                        <a href="https://github.com/MaharramAlverdiyev"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/maharram-alverdiyev-39b480313/"><FaLinkedin /></a>
                        <a href="https://www.facebook.com/profile.php?id=100005368068160"><FaFacebook /></a>
                        <a href=""><MdOutlineAlternateEmail /></a>
                    </div>
                </div>
                <div className="sec-one-right">
                    <img
                        ref={imageRef}
                        src={MaharramAlverdiyev}
                        alt="Maharram Alverdiyev"
                        className={isVisible ? "visible" : ""}
                    />
                </div>
            </div>
        </div>
    )
}
