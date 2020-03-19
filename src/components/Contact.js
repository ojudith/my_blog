import React from "react"
import judy from "../images/judy.jpg"



function Contact() {
  return (
    <div className="contact">
      <h4 className="text-center mt-4 mb-5">React Out</h4>
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={judy} alt="junik " className="project-contact" />
              <p>
                Kindly contact me if you are looking for a software developer to
                work with, in either frontend or backend projects. <br />{" "}
                Available for :
                <ul>
                  <li> - Full-time role (onsite or remote)</li>
                  <li> - Team collaboration</li>
                  <li> - Contract or Personal jobs</li>
                </ul>
              </p>
              <p>
                you can also reach out to me for any speaking engagements,
                facilitator in web designs and development
              </p>
              <p>
                <a href="mailto:oikujudith@gmail.com">Send an E-mail </a>
              </p>
            </div>
            <div className="col-md-6">
              <h6>Send a Message</h6>
              <form name="contact" method="post" data-netlify="true">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="form-control"
                    placeholder="Enter your name"
                    aria-describedby="helpId"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    placeholder="Enter your email"
                    aria-describedby="helpId"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    class="form-control"
                    id="message"
                    placeholder="Enter your message"
                    cols="10"
                    rows="10"
                  ></textarea>
                </div>
                <div class="form-group">
                  <div data-netlify-recaptcha="true"></div>
                </div>
                
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
              <a href="#top" class="go-top">
                {/* <i class="fa fa-angle-up" aria-hidden="true"></i> */}
                scroll-top
              </a>
              <p>&copy;2020 Judith Oiku</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
