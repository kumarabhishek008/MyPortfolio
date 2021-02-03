import React from "react";
import { Button } from "@material-ui/core";
import Cards from "../../components/Card/Cards";
import './style.scss';
import image1 from '../../utils/images/1.JPG';
import image2 from '../../utils/images/2.JPG';
import image3 from '../../utils/images/3.JPG';

const projects = [
     {
          img : image1,
          header : 'Github Profile',
          description : 'It was first projects fetched github profiles using github api',
     },
     {
          img : image2,
          header : 'Html Builder',
          description : 'HTML landing page builder using grapes js',
     },
     {
          img : image3,
          header : 'Grorapid',
          description : 'A large scale webapp for B2B customer',
     }
]

const Projects = () => {
  return (
    <div id="projects">
      <div className="project-header">
        <h1>Projects</h1>
      </div>
      <div className='project-cards'>
           {
                projects.map((items)=>                
                <Cards
                  imgSrc={items.img}
                  header={items.header}
                  description={items.description}
                />
                )
           }
      </div>
    </div>
  );
};

export default Projects;
