import { useStaticQuery , Link , graphql} from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import sun from "../images/sun.png"
import moon from "../images/moon.png"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
    `
  )

return (
  <header
    style={{
      background: `#24292e`,
      color: `#fff`,
      marginBottom: `1.45rem`,
      width: `100%`,
      boxShadow: `0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        width: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `row`,
      }}
    >
      <h2 style={{ margin: 0, width: `60%` }}>
        {/* <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `inline`,
          }}
        ></Link> */}
        {data.site.siteMetadata.title}
      </h2>

      <Link
        to="/about"
        style={{
          color: `white`,
          textDecoration: `none`,
          display: `inline`,
          marginRight: `5px`,
        }}
      >
        About Me
      </Link>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              hidden
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              // checked={theme === "dark"}
            />
            {theme === "dark" ? (
              <img
                src={moon}
                style={{
                  marginBottom: `0px`,
                  height: `25px`,
                  marginTop: `5px`,
                }}
                alt="moon"
              />
            ) : (
              <img
                src={sun}
                style={{
                  marginBottom: `0px`,
                  height: `25px`,
                  marginTop: `5px`,
                }}
                alt="sun"
              />
            )}
          </label>
        )}
      </ThemeToggler>
    </div>
  </header>
)
}
// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header
