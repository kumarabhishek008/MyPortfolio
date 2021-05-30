import React from "react";
import { Button } from "@material-ui/core";
import Cards from "../../components/Card/Cards";
import './style.scss';

const projects = [
     {
          img : 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80',
          header : 'Github Profile',
          description : 'It was first projects fetched github profiles using github api',
          link:'https://github.com/kumarabhishek008/github-profiles.git'
     },
     {
          img : 'https://images.unsplash.com/photo-1547860664-b8537ca5f833?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          header : 'Html Builder',
          description : 'HTML landing page builder using grapes js',
          link:'https://grapesjs.com/'
     },
     {
          img : 'https://images.unsplash.com/photo-1590650046871-92c887180603?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          header : 'Grorapid',
          description : 'A large scale webapp for B2B customer',
          link:'https://portal.grorapid.com/'
     },
     {
          img : 'https://images.unsplash.com/photo-1457433575995-8407028a9970?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          header : 'NVGT',
          description : 'A funnel tool for storing links',
          link:'https://nvgt.in'
     },
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
