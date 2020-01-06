import React from "react"
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"

function Projects() {
  return (
    <div className="container">
      <h5>Some projects done</h5>
      <div className="project">
        <div className="row">
          <div className="col-md-4">
            <img src={project1} alt="junik " className="project-image" />
            <p>Portfolio site with GatsbyJs</p>
            <p>link here</p>
          </div>
          <div className="col-md-4">
            <img src={project2} alt="junik " className="project-image" />
            <p>Practice site with vue</p>
            <p>link here</p>
          </div>
          <div className="col-md-4">
            <img src={project3} alt="junik " className="project-image" />
            <p>Quiz app with ReactJs</p>
            <p>link here</p>
          </div>
          <div className="col-md-4">
            <img src={project4} alt="junik " className="project-image" />
            <p>Technews with ReactJs</p>
            <p>link here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
