import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};


const resumePdfUrl = 'https://drive.google.com/file/d/18jGi2MUBq8R4Q7hwzh2aH_Pko09vTqRq/view?usp=sharing';

  const handleDownload = () => {
    window.open(resumePdfUrl, '_blank');
  };

  
  
const Header = () => (

<>
<h2 className="head-text app__header">
  <div className='header-body'> 
    <div>नमस्ते दोस्तों !</div> 
    <br />
<div> 
  <span>Myself Abdul Rehman   </span>
</div>

</div>
</h2>


  

<div className="app__header app__flex">
    
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >

      <h2 className="side-text">Software developer specialization in Frontend Development.</h2>
      <button id='download-btn' onClick={handleDownload}>Checkout Resume </button>

    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.node, images.react, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div></>

  
);



export default AppWrap(Header, 'home');