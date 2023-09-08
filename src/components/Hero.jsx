import React from 'react'
import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas';
import { styles } from '../styles';
import '../style.css'
import image from '../img/e.png';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
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
                    <h3> Backend <span className='tan'> developer</span></h3>
                    
                </div>

          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p> */}
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
    <motion.div className='about  items-center' id='about'>
      <div className="about-img  lg:top-[300px] sm:top-[250px] xs:top-[300px] top-[300px]  mt-2">
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