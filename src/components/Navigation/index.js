import React from 'react'
import { Link } from 'gatsby'

const Navigation = ({ navigation, currentLang }) => {
  let translatedNavigation = navigation.filter(({ node: item }) => {
    return item.node_locale === currentLang
  })
  translatedNavigation = { ...translatedNavigation[0].node }

  const content = (navigationItem) => {
    const linkedModel = navigationItem.link.internalUrl
    let url = ''
    if (linkedModel) {
      url = `/${navigationItem.node_locale}/pages/${linkedModel.slug}`
      return <Link to={url}>{navigationItem.text}</Link>
    } else if (navigationItem.link.externalUrl) {
      url = navigationItem.link.externalUrl
      return (
        <a href={url} target="_blank" rel="noreferrer">
          {navigationItem.text}
        </a>
      )
    }
  }

  return (
    <nav>
      <ul className="list-unstyled d-flex mx-n2">
        {translatedNavigation.navigationItems.map((navigationItem, index) => (
          <li key={index} className="px-2">
            {content(navigationItem)}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
