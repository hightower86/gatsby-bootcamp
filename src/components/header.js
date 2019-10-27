import React from "react"
import { Link } from "gatsby"
import headerStyle from "./header.module.scss"

const Header = () => {
  return (
    <header className={headerStyle.header}>
      <h1>
        <Link to="/" className={headerStyle.title}>
          Adel Rezvanov
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
