import * as React from "react"
import Link from "gatsby-link"

const Langswitcher = (props) => {
  return (
    <div className="langswitcher ms-4">
      <ul className="list-unstyled">
        {props.langs.map((lang, index) => {
          return (
            <li key={index} selected={lang.selected}>
              <Link
                to={lang.link}
                key={lang.langKey}
                style={{
                  color: "white",
                }}
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

export default Langswitcher
