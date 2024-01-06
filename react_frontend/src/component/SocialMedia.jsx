import React from 'react'
import {BsGithub, BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href="https://github.com/featitx" target="_blank" rel="noopener noreferrer">
        <BsGithub/>
        </a>
            
        </div>

        <div>

        <a href="https://www.linkedin.com/in/abdul-r-siddique-a23257210/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn/>
        </a>
          
          
          
        </div>

        <div>
        <a href="https://www.instagram.com/featitx/" target="_blank" rel="noopener noreferrer">
        <BsInstagram/>
        </a>
        </div>

    </div>
  )
}

export default SocialMedia