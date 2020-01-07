import React from "react"
import project1 from "../images/project1.png"
import project2 from "../images/project2.png"
import project3 from "../images/project3.png"
import project4 from "../images/project4.png"
import project5 from "../images/project5.png"
import project6 from "../images/project6.png"
import project7 from "../images/project7.png"

function Projects() {
  return (
    <div className="container">
      <h5 className="text-center mt-3">Some projects done</h5>
      <p className="text-center">Others are client-based jobs</p>
      <div className="project">
        <div className="row">
          <div className="col-md-3">
            <img src={project1} alt="junik " className="project-image" />
            <p>Portfolio site built with GatsbyJs</p>
            <p>
              <a href="https://judyblogbeta.netlify.com">view site</a>
            </p>
          </div>
          <div className="col-md-3">
            <img src={project2} alt="junik " className="project-image" />
            <p>An entry page built with vue</p>
            <p>
              <a href="https://judyy-employee.netlify.com">view site</a>
            </p>
          </div>
          <div className="col-md-3">
            <img src={project3} alt="junik " className="project-image" />
            <p>Quiz app built with ReactJs</p>
            <p>
              <a href="https://onlineminiapp.netlify.com">View site</a>
            </p>
          </div>
          <div className="col-md-3">
            <img src={project4} alt="junik " className="project-image" />
            <p>Technews built with ReactJs</p>
            <p>
              <a href="https://technewsplus.netlify.com">view site</a>
            </p>
          </div>
          {/* <div className="col-md-3">
            <img src={project5} alt="junik " className="project-image" />
            <p>Personal blog built with GatsbyJs</p>
            <p>
              <a href="https://judyblogbeta.netlify.com">view site</a>
            </p>
          </div> */}
          <div className="col-md-3">
            <img src={project6} alt="junik " className="project-image" />
            <p>Online Ticketing Support App built with Laravel</p>
            <p>
              <a href="">view site</a>
            </p>
          </div>
          <div className="col-md-3">
            <img src={project7} alt="junik " className="project-image" />
            <p>Student Record Mgt. System built with PHP</p>
            <p>
              <a href="">view site</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
