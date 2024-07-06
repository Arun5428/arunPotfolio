import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";

import { SectionWraper } from "../hoc";
import { Certicates, projects } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";

const ProjectCard=({index,name,image})=>{
return(
  <motion.div variants={fadeIn("up","spring",
  index*0.5, 0.75)}
  >
<Tilt
options={{

  max:45,
  scale:1,
  speed:450,
}}
className="bg-tertiary p-5 rounded-2xl xs:w-[400px] lg:w-[560px] sm:w-[360px] w-full cursor-pointer"

>
<div className="relative w-full "
 >

<img src={image}
  alt={name}
className="w-full h-full object-cover rounded-2xl"
/>




</div>

</Tilt>

  </motion.div>
)

}
const Ser = () => {
  return (
    <>
      <motion.div
       variants={textVariant()}>
        <p className={styles.sectionSubText}>
        my certificates
        </p>
        <h2 className={styles.sectionHeadText
        }> Certifications </h2>
      </motion.div>
     
      <div className="mt-2 flex flex-wrap gap-7"
       >
        {Certicates.map((certicate,index)=>(
          <ProjectCard key={`certicate-${index}`}
          index={index}
            {...certicate}
            
          />
        ))}
      </div>
    </>
  )//
}

export default SectionWraper(Ser,"")

