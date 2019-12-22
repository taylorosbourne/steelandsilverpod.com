/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `90vw`,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main style={{minHeight: `80vh`}}>{children}</main>
      </div>
        <footer style={{width: `100%`, fontSize: `0.75rem`, margin: 0, textAlign: `center`, background: `rgb(42,42,42)`, color: `#fff`, fontFamily: `Helvetica`, textTransform: `uppercase`, display: `flex`, flexDirection: `column`, justifyContent: `center`, alignItems: `center`}}>
          <p style={{height: `50%`, padding: 0, margin: 0}}>
            &#169; Steel & Silver Podcast 2019, Produced by Taylor Osbourne and Charlie Boettcher
          </p>
          <p style={{fontSize: `0.65rem`, padding: 0, margin: 0}}>
            Site built and designed by Taylor Osbourne.  Built with <a style={{cursor: `pointer`, color: `#663399`, fontWeight: `700`}}>Gatsby</a>, hosted on <a style={{cursor: `pointer`, color: `#029387`, fontWeight: `700`}}>Netlify</a>, chillin on <a style={{cursor: `pointer`, color: `#2CAE48`, fontWeight: `700`}}>Github</a>.
          </p>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
