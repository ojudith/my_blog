import React from "react"
import { Link } from "gatsby"
import Aboutme from "../components/Aboutme"
import Edu from "../components/Edu"
import Talk from "../components/Talks"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import junik from "../images/junik.jpg"

class About extends React.Component {
  render() {
    return (
      <div class="main-body">
        <section className="header">
          <div className="text-center">
            <Link to="/" className="text-top"
            >view my Blog</Link>
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
        <Contact/>
      </div>
    )
  }
}

export default About
