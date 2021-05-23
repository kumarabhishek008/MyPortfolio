import React from "react";
import { Button } from "@material-ui/core";
import Cards from "../../components/Card/Cards";
import './style.scss';

const projects = [
     {
          img : 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-fd52a.appspot.com/o/MyImages%2F1.JPG?alt=media&token=bc6b8a07-5696-49c7-88f3-c24c68783150',
          header : 'Github Profile',
          description : 'It was first projects fetched github profiles using github api',
          link:'https://github.com/kumarabhishek008/github-profiles.git'
     },
     {
          img : 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-fd52a.appspot.com/o/MyImages%2F3.JPG?alt=media&token=09b1277b-c0b0-4e25-882f-72572ba65261',
          header : 'Html Builder',
          description : 'HTML landing page builder using grapes js',
          link:'https://grapesjs.com/'
     },
     {
          img : 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-fd52a.appspot.com/o/MyImages%2F2.JPG?alt=media&token=f4d5e54e-a8e5-46e5-969c-c559e4554475',
          header : 'Grorapid',
          description : 'A large scale webapp for B2B customer',
          link:'https://portal.grorapid.com/'
     }
]

const Projects = () => {
  return (
    <div id="projects">
         <div className='container'>

      <div className="project-header">
        <h1>Projects</h1>
      </div>
      <div className='project-cards'>
           {
                projects.map((items, i)=>                
                <Cards
                key={i}
                imgSrc={items.img}
                header={items.header}
                description={items.description}
                link={items.link}
                />
                )
               }
      </div>
     </div>
    </div>
  );
};

export default Projects;
