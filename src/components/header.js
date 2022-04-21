import * as React from "react"
import { Link } from "gatsby"
import useScrollPosition from "../hooks/useScrollPosition"

const Header = () => {
  const scrollPos = useScrollPosition()
  return (
    <header
      className={`header bg-primary text-white mb-4 ${
        scrollPos > 40 ? "header--shrink" : ""
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div>Family Recipes</div>
        <nav>
          <ul className="list-unstyled d-flex">
            <li>
              <Link to={"/"}>Recipes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
