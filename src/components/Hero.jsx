import React,{Suspense}  from 'react'
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';
import { styles } from '../styles';
import '../style.css';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillTwitterSquare } from 'react-icons/ai'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Canvas } from "@react-three/fiber";
import { Preload} from "@react-three/drei";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import image from '../img/e.png';
import CanvasLoader from "./Loader";
import '../social.css'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex
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
          <div className={` text-animate font-black text-white lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[25px] lg:leading-[98px] mt-2`}>
                    <h3>Software <span className='tan'> developer</span></h3>
                    
                </div>

         
          {/* <div className={`pt-7 flex flex-row space-x-4 sm:space-x-[40px] lg:space-x-[2.5rem] xs:space-x-[20px]  text-4xl`}>
          <AiFillGithub className='box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/>
          <AiFillLinkedin className='box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/>

          <AiFillInstagram className='lg:bg-slate-[10px] box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/20 duration-300 hover:text-blue-600'/>
         
           <AiFillTwitterCircle className='box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue-600'/>
        
          
          </div>  */}
          <div>
          <div className="pt-7 flex flex-row space-x-10 sm:space-x-[40px] lg:space-x-[2.5rem] xs:space-x-[20px]  text-4xl">
     
    
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faGithub} size="1.5x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social bg-slate-100 h-7">
        <FontAwesomeIcon icon={faLinkedin} size="1.5x"  />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1.5x"  />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1.5x" />
      </a>
</div>
          </div>
        
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
      

<motion.div className='about' id='about'>
    
      <div className="about-img  lg:top-[400px] sm:top-[350px] xs:top-[300px] top-[300px] mt-2 sm:w-[26rem] sm:h-[26rem] xs:w-[26rem] xs:h-[26rem] lg:w-[26rem]  lg:h-[26rem]">
      
      
        <img src={image} alt=""/>
                <span class="circle-span "></span>
        
       


     
                
                
            </div>
            
      </motion.div>


      
   
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