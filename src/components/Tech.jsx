import {BallCanvas} from "./canvas";
import { SectionWraper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn,textVariant } from "../utils/motion";
import { styles } from "../styles";
import { skills, technologies } from "../constants";
import '../css/style.css'


const Tech = () => {
  return (

    <>
      <motion.div variants={textVariant()}
    
      >
        <p className={styles.sectionSubText}>
          My Skills                                                                                                                             
        </p>
        <h2 className={styles.sectionHeadText}>Skills</h2>

      </motion.div>
     
    
 <div className="flex flex-row flex-wrap gap-10">
  {technologies.map((technology) => (
    <div className="flex flex-row h-28 w-28" key={technology.name}>
      <BallCanvas icon={technology.icon} />
    </div>
  ))}
</div>

      {/* <section className="experience-section mt-[-50px] flex flex-col" id="about">
     
      <motion.div variants={fadeIn('right','tween',0.2,1)} className="container">
      <div className="experience-items">
      {
        skills.map((skill,name)=>(

       
      <motion.div className="experience-item" key={skill.name}
       variants={fadeIn("up","spring",
  name*0.5, 0.5)}
      >
      <div className="experience-info">
        <p>{skill.name}</p>
        <p>{skill.percentage}%</p>

      </div>
      <div className="progress-line" data-percentage={`${skill.percentage}`}>
        <span style={{width:`${skill.percentage}%`}}></span>
      </div>

      </motion.div>
      ))
      }
      </div>

      </motion.div>

      </section> */}
      
      </>


    
  )
}

export default SectionWraper(Tech,"")