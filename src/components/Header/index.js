import * as React from 'react'
import { Link } from 'gatsby'
import useScrollPosition from '../../hooks/useScrollPosition'
import { LangSwitcher } from '@components'

const Header = (props) => {
  const scrollPos = useScrollPosition()
  return (
    <header
      className={`header bg-primary text-white mb-4 ${
        scrollPos > 40 ? 'header--shrink' : ''
      }`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div>Family Recipes</div>
        <div className="d-flex">
          <nav>
            <ul className="list-unstyled d-flex">
              <li>
                <Link
                  to={`/${
                    props.langs.filter((lang) => lang.selected)[0].langKey
                  }/recipes`}
                >
                  Recipes
                </Link>
              </li>
            </ul>
          </nav>
          <LangSwitcher langs={props.langs} />
        </div>
      </div>
    </header>
  )
}

export default Header
