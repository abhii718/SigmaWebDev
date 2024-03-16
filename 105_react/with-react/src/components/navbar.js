import React from 'react'
import Footer from './footer'

const navbar = ({logoText}) => {
  return (
   
    <div>
        <div className='logo'>{logoText}</div>
        <ul>
            <li>HOme</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <Footer/>
    </div>
  )
}

export default navbar