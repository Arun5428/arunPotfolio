import { BrowserRouter } from "react-router-dom"

import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas, Certicate, Ser, PageLoader} from './components';
import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
// import Certicates from "./components/Certicates";
const App=()=>{
  const [pageLoading,setPageLoading]=useState(true);
  useEffect(()=>{

    setTimeout(()=>{
      setPageLoading(false);
    },2000);
  },[]);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
      
        {pageLoading?(
          
         <PageLoader/>
          
        ):(
          <div>
          <div className=''>
          <Navbar />
          
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Ser/>
        {/* <Certicate/> */}
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
        </div>
          
        )
        }
       
      </div>
    </BrowserRouter>
  );
}

export default App;
