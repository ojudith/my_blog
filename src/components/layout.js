import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h2
          style={{
            ...scale(1.5),
            // marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    } else {
      header = (
        <h3
          style={{
             fontFamily: `Poppins, sans-serif`,
            // fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        className=""
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: "var(--bg)",
        }}
      >
        {/* <header>{header}</header> */}
        <main>{children}</main>
        <br />
        <br />
        <footer>
          {/* © {new Date().getFullYear()}, all articles written by me, built with
          {` `} */}
          <a
            href="https://www.github.com/ojudith"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          <a
            href="https://www.medium.com/@ojudith"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>{" "}
          {` `}
          <a
            href="https://www.linkedin.com/in/oiku-judith-o-ba5307159"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {` `}
          <a href="mailto:oikujudith@gmail.com">Email</a>
        </footer>
      </div>
    )
  }
}

export default Layout
