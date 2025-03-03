import React,{Suspense}  from 'react'
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';
import { styles } from '../styles';
import '../css/style.css';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Canvas } from "@react-three/fiber";
import { Preload} from "@react-three/drei";
import{fadeIn,textVariant}from '../utils/motion';

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import image from '../img/e.png';
import im from '../img/arunPic.jpeg'
import CanvasLoader from "./Loader";
import '../css/social.css'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
    <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex
    flex-row items-start gap-5`}>
    <div className='flex flex-col 
    justify-center items-center mt-5'>
    <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
    <div className='w-1 sm:h-80 h-40 violet-gradient'/>

    </div>
    <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Arunkumar</span>
          </h1>
          <div className={` text-animate font-black text-white lg:text-[50px] sm:text-[30px] xs:text-[20px] text-[20px] lg:leading-[98px]`}>
                    <h3>Software <span className='tan'> developer</span></h3>
                    
                </div>

         
          {/* <div className={`pt-7 flex flex-row space-x-4 sm:space-x-[40px] lg:space-x-[2.5rem] xs:space-x-[20px]  text-4xl`}>
          <AiFillGithub className='box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/>
          <AiFillLinkedin className='box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/>

          <AiFillInstagram className='lg:bg-slate-[10px] box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/20 duration-300 hover:text-blue-600'/>
         
           <AiFillTwitterCircle className='box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/>
        
          
          </div>  */}
          <motion.div variants={fadeIn('right','tween',0.2,1)}>
          
          <div className="pt-7 flex flex-row space-x-10 sm:space-x-[40px] lg:space-x-[2.5rem] xs:space-x-[20px]  text-4xl">
     
    
      <a href="https://github.com/Arun5428"
        className="youtube social" target='_blank'>
        <FontAwesomeIcon icon={faGithub} size="2xs" />
      </a>
      <a href="https://www.linkedin.com/in/arunkumar-annamalai-79a32a213"
        className="facebook social h-7" target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} size="2xs" className=""  />
      </a>
      <a href="#" className="twitter social" target='_blank'>
        <FontAwesomeIcon icon={faTwitter} size="2xs"  />
      </a>
      <a href="#"
        className="instagram social" target='_blank'>
        <FontAwesomeIcon icon={faInstagram} size="2xs" />
      </a>
</div>
         
          </motion.div>
        
        </div>

    </div>
    
     {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center
    items-center'>
      <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
   <motion.div
    animate={{
      y:[0,24,0]
    }}
    transition={{
      duration:1.5,
      repeat:Infinity,
     repeatType:'loop'

    }} className='w-3 h-3 rounded-full bg-secondary mp-1'

   />
        </div>
      </a>
    </div>
     */}

     {/* social icons */}
      
     <Suspense fallback={<CanvasLoader/>}> 

<motion.div className='about' id='about' variants={fadeIn('right','tween',0.2,1)}>
    
      <div className="about-img  lg:top-[360px] sm:top-[350px] xs:top-[300px] top-[300px] mt-2 sm:w-[20rem] sm:h-[20rem] xs:w-[20rem] xs:h-[20rem] lg:w-[20rem]  lg:h-[20rem]">
      
      
        <img src={im} alt=""/>
                <span class="circle-span "></span>
        
       


     
                
                
            </div>
            
      </motion.div>

</Suspense>
      
   
    {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center
    items-center'>
      <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
   <motion.div
    animate={{
      y:[0,24,0]
    }}
    transition={{
      duration:1.5,
      repeat:Infinity,
     repeatType:'loop'

    }} className='w-3 h-3 rounded-full bg-secondary mp-1'

   />
        </div>
      </a>
    </div>
     */}
    </section>
    
  )
}

export default Hero