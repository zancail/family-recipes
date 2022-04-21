import * as React from "react"
import { Link } from "gatsby"
import Langswitcher from "./langswitcher"

const Header = (props) => {
  return (
    <header className="bg-primary text-white py-2 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <div>Family Recipes</div>
        <div className="d-flex">
          <nav>
            <ul className="list-unstyled d-flex">
              <li>
                <Link
                  to={`/${
                    props.langs.filter((lang) => lang.selected)[0].langKey
                  }`}
                >
                  Recipes
                </Link>
              </li>
            </ul>
          </nav>
          <Langswitcher langs={props.langs} />
        </div>
      </div>
    </header>
  )
}

export default Header
