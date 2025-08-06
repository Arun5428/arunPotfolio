/**
 * @Author: Your name
 * @Date:   2023-07-18 11:52:06
 * @Last Modified by:   Your name
 * @Last Modified time: 2024-02-17 08:41:29
 */
import {
    mobile,
    backend,
    spring,
    creator,
    javac,
    review,
    sql,
    web,
    java,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,

    javaa,
    blog,
    blog2,
    javacertificate
    
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
    
  ];
  
  const technologies = [
    {
      name: "java",
      icon: javaa,
    },
    {
      name: "sql",
      icon: sql,
    },
    // {
    //   name: "spring Boot",
    //   icon: spring,
    // },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
  
  
  ];


  const Certicates = [
    {
      name: "java",
      image: javacertificate,
    },
    

    
    
  
  
  ];

  const skills = [
    {
      name: "Java",
      icon: html,
      percentage:"85",
    },
    {
      name: "jsp Servlet",
      icon: typescript,
      percentage:"50",
    },
    {
      name: "SQL",
      icon: html,
      percentage:"70",
      
    },
    {
      name: "MongoDB",
      icon: mongodb,
      percentage:"70",
    },
    {
      name: "Spring Boot",
      percentage:"30",
    },
    {
      name: "HTML 5",
      icon: html,
      percentage:"80",
    },
    {
      name: "CSS 3",
      icon: css,
      percentage:"60",
    },
    {
      name: "JavaScript",
      icon: javascript,
      percentage:"50",
    },
   
    {
      name: "React JS",
      icon: reactjs,
      percentage:"30",
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
      percentage:"30",
    },
  
    {
      name: "git",
      icon: git,
      percentage:"50",
    },
  
  
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }]
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  // ];
  

  const education = [

     {
      title: "PG(MCA)",
      company_name: "Thirumalai engneering collage",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2021 - Sep 2023",
      points: "Percentage :79.8%"
    },
     {
      title: "UG(BSC.CS)",
      company_name: "SCSVMV University",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2018 - Jan 2021",
      points: "Percentage :83.2%"
    },

     {
      title: "HSC",
      company_name: "GHS SChool",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2017 - May 2018",
      points: "Percentage: 70%"
    },
    {
      title: "SSLC",
      company_name: "GHS School",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2015 - April 2016",
      points: "Percentage : 85%",
    },
   
   
   
  ];

  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    
  ];
  
  const projects = [
    {
      name: "Movies Reviwes App",
      description:
        "A web-based platform that enables users to search for movies, watch trailers, and post reviews for a variety of films..",
      tags: [
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
      
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: review,
      source_code_link: "https://react-app-moviesreview.onrender.com/",
      git_source_link:"https://github.com/Arun5428/moviesReview.git",
    },

    {
      name: "Blog Application",
      description:
        "Developed a full-featured blog application, CRUD operations for posts and comments, a responsive design....",
      tags: [
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
      
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blog2,
      source_code_link: "https://angular-blogapplication.onrender.com/",
      git_source_link:"https://github.com/Arun5428/moviesReview.git",
    },
   
   
  ];
  
  export { services, technologies, experiences, testimonials, projects,skills,Certicates,education };
  