import React from 'react'
import Link from '../Link'

const Navigation = ({ navigation, currentLang }) => {
  let translatedNavigation = navigation.filter(({ node: item }) => {
    return item.node_locale === currentLang
  })
  translatedNavigation = { ...translatedNavigation[0].node }

  return (
    <nav>
      <ul className="list-unstyled d-flex mx-n2">
        {translatedNavigation.navigationItems.map((navigationItem, index) => (
          <li key={index} className="px-2">
            <Link button={navigationItem} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
