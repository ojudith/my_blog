import React from 'react'

function Skills() {
    return (
      <div>
        <h3 className="text-center">Skillsets</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h6>Technical skills</h6>
              <ul>
                <li>HTML5/CSS3</li>
                <li>JavaScript/Es2015</li>
                <li>React, Vue</li>
                <li>GatsbyJs</li>
                <li>PHP/Laravel/Lumen</li>
                <li>NodeJs</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Workflow/Database/Design tool</h6>
              <ul>
                <li>Git, Github</li>
                <li>Netlify</li>
                <li>Babel</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Soft skills</h6>
              <ul>
                <li>Communication</li>
                <li>Collaboration</li>
                <li>Leadership</li>
                <li>Analytical thinking</li>
                <li>Logical thinking</li>
                <li>Detailing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Skills
