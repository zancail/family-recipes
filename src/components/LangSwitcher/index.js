import * as React from 'react'
import Link from 'gatsby-link'
import { useTranslation } from 'react-i18next'

const LangSwitcher = (props) => {
  const { i18n } = useTranslation()

  return (
    <div className="langswitcher ms-lg-4">
      <ul className="list-unstyled d-flex mx-n2">
        {props.langs.map((lang, index) => {
          return (
            <li key={index} className="px-2">
              <Link
                to={lang.link}
                key={lang.langKey}
                style={{
                  color: 'white',
                }}
                onClick={() => i18n.changeLanguage(lang.langKey)}
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
