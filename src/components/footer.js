import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `)
  return (
    <footer className={footerStyles.footer}>
      <p>Created by <span role="img" aria-label="copyright">©️</span> {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer