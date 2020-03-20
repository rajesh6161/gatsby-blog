import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import HeaderStyles from "./header.module.scss"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={HeaderStyles.header}>
      <Link className={HeaderStyles.title} to="/">
        <h1 className={HeaderStyles.title}>{data.site.siteMetadata.title}</h1>
      </Link>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/posts"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/about"
            >
              About Page
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/contact"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
