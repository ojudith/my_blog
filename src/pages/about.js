import React from "react"
import Aboutme from "../components/Aboutme"
import Edu from "../components/Edu"
import Talk from "../components/Talks"

class About extends React.Component {
  render() {
   

    return (
      <div class="main-body">
        <section className="header">
          <div className="text-center">
            <div className="user-box">
              <img src="img/junik.jpg" alt="junik "/>
                  <h1>Judith Oiku</h1>
              <p>
                Full-stack Web Developer <br/> Content Strategist
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
        <Edu/>
        <Talk/>
      </div>
    )
  }
}

export default About
