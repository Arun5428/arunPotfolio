//import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { VerticalTimeline,VerticalTimelineElement
 } from 'react-vertical-timeline-component';

import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../styles";
import {experiences} from '../constants';
import { SectionWraper } from "../hoc";
import { textVariant ,slideIn,fadeIn} from "../utils/motion";



const ExperienceCard=({experience})=>(

  <VerticalTimelineElement className="vertical-timeline-element--work "
  contentStyle={{background:'#1d1839',color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid  #232631' }}
   date={experience.date}
  iconStyle={{background:"white"}}
  // icon={

  //   <div className="flex justify-center items-center w-full h-full">
  //     <img 
  //     src={experience.icon}
  //     alt={experience.company_name}
  //     className="w-[60%] h-[60%] object-contain"
  //     />
  //   </div>
  // }
  >


  <div  >
    <h3 className="text-white text-[24px] font-bold" >{experience.title}</h3>

    <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
  </div>
<p>{experience.points}</p>
  

{/* <p>{experience.date}</p> */}
  </VerticalTimelineElement>
);


const Experience = () => {
  return (
    <>
      <motion.div variants={fadeIn('right','tween',0.2,1)}>
        <p className={`${styles.sectionSubText}`}>
          what I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText
        }`}> Education</h2>
      </motion.div>



<motion.div className="mt-20 flex flex-col " 
//  variants={fadeIn("right","spring",0.5)}
 >

{/* 
      <div  className="mt-20 flex flex-col "> */}
      <VerticalTimeline  >
        {experiences.map((experience,index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>

      {/* </div> */}
      </motion.div>

    </>
  )
}

export default SectionWraper( Experience,"work")