import React from 'react'

function Skills() {
    return (
      <div>
        <h3 className="text-center">Skillsets</h3>
        <div className="skillset container">
          <div className="row">
            <div className="col-md-4">
              <h6 className="text-danger">Technical skills</h6>
              <ul>
                <li>
                  {" "}
                  {/* <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgtK_O5sjIYLSF3ZyVrNfFd6V9x_2LYVZWKsAu8RufRrtD9H9&s"
                    alt=""
                    className="skills-icon"
                  /> */}
                  HTML5/{" "}
                  {/* <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    alt=""
                    className="skills-icon"
                  />{" "} */}
                  CSS3
                </li>
                <li>
                  {" "}
                  {/* <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    alt=""
                    className="skills-icon"
                  /> */}
                  JavaScript/Es2015
                </li>
                <li>
                  {" "}
                  {/* <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                    alt=""
                    className="skills-icon"
                  /> */}
                  React,{" "}
                  {/* <img
                    src="https://cdn.auth0.com/blog/react-js/react.png"
                    alt=""
                    className="skills-icon"
                  />{" "} */}
                  Vue
                </li>
                <li>GatsbyJs</li>
                <li>
                  PHP/{" "}
                  {/* <img
                    src=" https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                    alt=""
                    className="skills-icon"
                  /> */}
                  Laravel/Lumen
                </li>
                <li>
                  {" "}
                  {/* <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0OQBBBHCZRHwNhVzUE4jHkRtLNJYQ3HpcX_-IGOQoKio6TrvV&sNodeJs"
                    alt=""
                    className="skills-icon"
                  /> NodeJS */}
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="text-danger">Workflow/Database/Design tool</h6>
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
              <h6 className="text-danger">Soft skills</h6>
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
