import React from "react"
import FooterStyles from "./footer.module.scss"
import { useStaticQuery, graphql } from "gatsby"
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
    <footer className={FooterStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}, &copy; 2019</p>
    </footer>
  )
}
export default Footer
