import React from "react"

class Edu extends React.Component {
  render() {

      return (
        <div className="resume" id="resume">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-center">My Experiences</h3>
                <ul className="timeline">
                  <li>
                    <h4>
                      <span>2019 -</span>Volunteer Community Experience
                    </h4>
                    <p>
                      - Co-organiser GDG Ikorodu
                      <br />
                      - WTM Ikorodu lead
                      <br />
                      <b>Duration</b> - [2019 - present]
                      <br />
                    </p>
                  </li>
                  <li>
                    <h4>
                      <span>2018 - </span>Web Software Developer
                    </h4>
                    <p>
                      - Designing standard and W3C compliant website layout for clients using HTML5 and CSS. <br />
                      - Developing web applications using PHP/- Laravel/MySQL and Javascript/Jquery Libraries.
                      <br />
                        - Building websites with JAMstack technology (Gatsby)             
                      <br />
                      <b>Duration</b> - [2018-present]
                      <br />
                    </p>
                  </li>

                  <li>
                    <h4>
                      <span>2017 -</span>Freelance web developer
                    </h4>
                    <p>
                      - Designing standard and W3C compliant website layout for
                      - clients using HTML5 and CSS. <br />
                      - Developing web applications using PHP/MySQL and
                      Javascript/Jquery Libraries.
                      <br />
                      <b>Duration</b> - [2017-2018]
                      <br />
                    </p>
                  </li>
                  <li>
                    <h4>
                      <span>2017 -</span>Teaching
                    </h4>
                    <p>
                      - Educating Senior Secondary School Students Mathematics .{" "}
                      <br />
                      <b>School</b> - Primary place of Assignment
                      <br />
                      <b>Location</b> - Delta-State
                    </p>
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <h3 class="text-center">My Education</h3>
                <ul class="timeline">
                  <li>
                    <h4>
                      <span>2011 -</span>University
                    </h4>
                    <p>
                      <b>School</b> - University of Calabar (UNICAL)
                      <br />
                      <b>Degree</b> - B.sc (Mathematics/Statistics)
                      <br />
                      <b>Location</b> - Calabar, Cross-river Nigeria
                    </p>
                  </li>
                  <li>
                    <h4>
                      <span>2016 -</span>Nysc
                    </h4>
                    <p>
                      One-year complusory National Youth Service Corp <br />
                      <b>Location</b> - Delta-State
                    </p>
                  </li>
                  <li>
                    <h4>
                      <span>2018 -</span>Certification
                    </h4>
                    <p>
                      Google Skills for Africa (Online Marketing Fundamentals){" "}
                      <br />
                      <b>year</b> - [2018]
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Edu
