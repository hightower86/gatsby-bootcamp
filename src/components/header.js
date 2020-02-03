import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyle from "./header.module.scss"

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
    <header className={headerStyle.header}>
      <h1>
        <Link to="/" className={headerStyle.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyle.ul}>
          <li className={headerStyle.li}>
            <Link
              to="/"
              className={headerStyle.link}
              activeClassName={headerStyle.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li className={headerStyle.li}>
            <Link
              to="/about"
              className={headerStyle.link}
              activeClassName={headerStyle.activeNavItem}
            >
              About
            </Link>
          </li>
          <li className={headerStyle.li}>
            <Link
              to="/blog"
              className={headerStyle.link}
              activeClassName={headerStyle.activeNavItem}
            >
              Blog
            </Link>
          </li>
          <li className={headerStyle.li}>
            <Link
              to="/projects"
              className={headerStyle.link}
              activeClassName={headerStyle.activeNavItem}
            >
              Projects
            </Link>
          </li>
          <li className={headerStyle.li}>
            <Link
              to="/contact"
              className={headerStyle.link}
              activeClassName={headerStyle.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
