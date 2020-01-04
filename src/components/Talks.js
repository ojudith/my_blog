import React from "react"

class Talk extends React.Component {
  render() {
    return (
      <div className="talks">
        <h3 className="mt-3">Talks</h3>
        <p>
          I also speak at tech events about web, and other related technology
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                {/* <p className="card-text">International Women's Day, WTM Ajah</p> */}
                <div className="card-body">
                  <h5 className="card-title">
                    Web Accessibiity & its Importance in Web Development
                  </h5>
                  <p className="card-text">
                    International Women's Day, WTM Ajah
                  </p>
                  <p className="card-text">
                    April 27, 2018
                    <span>
                      <a href="#" className="text-slide text-danger">
                        Slide
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                {/* <p className="card-text">International Women's Day, WTM Ajah</p> */}
                <div className="card-body">
                  <h5 className="card-title">Kotlin for Developers</h5>
                  <p className="card-text">
                    Kotlin for Everywhere, GDG Ikorodu
                  </p>
                  <p className="card-text">
                    April 27, 2018
                    <span>
                      <a href="#" className="text-slide text-danger">
                        Slide
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                {/* <p className="card-text">International Women's Day, WTM Ajah</p> */}
                <div className="card-body">
                  <h5 className="card-title">
                    Promoting Diversity & Inclusion in tech.
                  </h5>
                  <p className="card-text">
                    Devfest 2019, GDG Ikorodu
                  </p>
                  <p className="card-text">
                    April 27, 2018{" "}
                    <span>
                      <a href="#" className="text-slide text-danger">
                        Slide
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    )
  }
}

export default Talk
