import React from "react"
import judy from "../images/judy.jpg"



function Contact() {
  return (
    <div className="footer container">
      <h5 className="text-center m-4">React Out</h5>
      <div className="project">
        <div className="row">
          <div className="col-md-6">
            <img src={judy} alt="junik " className="project-contact" />
            <p>
              Kindly contact if you have are looking for a software developer to
              work with, in either frontend or backend or both as the case
              maybe. Available for contract or personal jobs
            </p>
            <p>you can also reach out to me for any speaking event</p>
          </div>
          <div className="col-md-6">
            <form action="" method="post">
              <div class="form-group">
                <input
                  type="text"
                  name="name"
                  id=""
                  class="form-control"
                  placeholder="Enter your name"
                  aria-describedby="helpId"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="email"
                  id=""
                  class="form-control"
                  placeholder="Enter your email"
                  aria-describedby="helpId"
                />
              </div>
              <div class="form-group">
                <textarea
                  name="message"
                  class="form-control"
                   id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
