import React from "react"
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"

function Projects() {
  return (
    <div className="container">
      <h5 className="text-center mt-3">Some projects done</h5>
      <p className="text-center">Others are client-based jobs</p>
      <div className="project">
        <div className="row">
          <div className="col-md-3">
            <img src={project1} alt="junik " className="project-image" />
            <p>Portfolio site with GatsbyJs</p>
            <p>
              <a href="judyblogbeta.netlify.com">view site</a>
            </p>
          </div>
          <div className="col-md-3">
            <img src={project2} alt="junik " className="project-image" />
            <p>An entry page with vue</p>
            <p>
              <a href="judyy-employee.netlify.com">view site</a>
            </p>
          </div>
          <div className="col-md-3">
            <img src={project3} alt="junik " className="project-image" />
            <p>Quiz app with ReactJs</p>
            <p>
              <a href="onlineminiapp.netlify.com">View site</a>
            </p>
          </div>
          <div className="col-md-3">
            <img src={project4} alt="junik " className="project-image" />
            <p>Technews with ReactJs</p>
            <p>
              <a href="technewsplus.netlify.com">view site</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
