import * as React from 'react'
import Link from 'gatsby-link'

const LangSwitcher = (props) => {
  return (
    <div className="langswitcher ms-4">
      <ul className="list-unstyled d-flex">
        {props.langs.map((lang, index) => {
          return (
            <li key={index} className="ms-4">
              <Link
                to={lang.link.toLowerCase()}
                key={lang.langKey.toLowerCase()}
                style={{
                  color: 'white',
                }}
                className={lang.selected ? 'active' : 'text-decoration-none'}
              >
                {lang.langKey}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LangSwitcher
