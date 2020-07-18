import React from "react"

import { StaticQuery } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import { rhythm } from "../utils/typography"

const Layout = ({ children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <StaticQuery
      query={graphql`
          query {
              site {
                  siteMetadata {
                      menuLinks {
                        name
                        link
                      }
                  }
              }
          }
      `}
      render={data => (
        <React.Fragment>
          <Header menus={data.site.siteMetadata.menuLinks}/>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <main>{children}</main>
          </div>
          <Footer/>
        </React.Fragment>
      )}
    />
  )
}

export default Layout
