import React from 'react'
import "./footer.css"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className='footer'>
      <MdOutlineKeyboardDoubleArrowUp style={{ fontSize: '24px', cursor: 'pointer' }} />
      <h3 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}
        >Back to Top
      </h3>
      <p>Copyright <b className='Name'> <FaRegCopyright /> 2025 Maharram Alverdiyev</b> All Rights Reserved.</p>
    </div>
  )
}
