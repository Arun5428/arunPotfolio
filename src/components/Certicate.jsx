
import { motion } from "framer-motion";
import React, { Component } from "react";


import { SectionWraper } from "../hoc";
import { styles } from "../styles";
import { Certicates, projects } from "../constants";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fadeIn,textVariant } from "../utils/motion";


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Certicate = () => {
  const settings = {
    dots: true ,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          
        }
      },
      
    ],
    appendDots: dots => (
      <div
        style={{
          
          color: "blue",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
   
  };

  
  return (
    <>
    <motion.div
       variants={textVariant()}>
        <p className={styles.sectionSubText}>
         My Works
        </p>
        <h2 className={styles.sectionHeadText
        }> Projects. </h2>
      </motion.div>
    <div className="mt-3 text-secondary text-[17px]  lg:max-w-3xl xs:max-w-3xl leading-[30px] ">
   
    <Slider {...settings} className="card ">
    
      
     {
        Certicates.map((Certicate,image,name,index)=>(

       
          

<img src={Certicate.image}
  alt={Certicate.name}
className="w-full object-cover rounded-2xl bg-no-repeat p-2"
/>




      ))
      }
           
        
          

   
    </Slider>
  </div>
  </>
  )//
}

export default SectionWraper(Certicate,"")