import { BrowserRouter } from "react-router-dom"

import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas, Certicate, Ser} from './components';
// import Certicates from "./components/Certicates";
const App=()=>{

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
      {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
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
    </BrowserRouter>
  );
}

export default App;
