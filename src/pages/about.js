import React from "react"
import Aboutme from "../components/Aboutme"
import Edu from "../components/Edu"
import Talk from "../components/Talks"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import junik from "../images/junik.jpg"

class About extends React.Component {
  render() {
    return (
      <div class="main-body">
        <section className="header">
          <div className="text-center">
            <div className="user-box">
              <img src={junik} alt="junik " />
              <h1>Judith Oiku</h1>
              <p>
                Full-stack Web Developer <br /> Content Strategist
              </p>
            </div>
          </div>
          <div className="scroll-btn">
            <div className="scroll-bar">
              <a href="#about">
                <span> </span>
              </a>
            </div>
          </div>
        </section>
        <Aboutme />
        <Edu />
        <Talk />
        <Skills />
        <Projects/>
      </div>
    )
  }
}

export default About
