import React from 'react'
import { Header } from './Header/Header'
import { SectionOne } from './SectionOne/SectionOne'
import { SectionTwo } from './SectionTwo/SectionTwo'
import { SectionThree } from './SectionThree/SectionThree'
import { SectionFour } from './SectionFour/SectionFour'
import { SectionFive } from './SectionFive/SectionFive'
import { Footer } from './Footer/Footer'

export const Pages = () => {
  return (
    <>
    <Header/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <Footer/>
    </>
  )
}
