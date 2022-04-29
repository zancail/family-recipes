import React from 'react'
import Link from '../Link'
import { Nav } from 'react-bootstrap'

const Navigation = ({ navigation, currentLang }) => {
  let translatedNavigation = navigation.filter(({ node: item }) => {
    return item.node_locale === currentLang
  })
  translatedNavigation = { ...translatedNavigation[0].node }

  return (
    <Nav className="me-auto">
      {translatedNavigation.navigationItems.map((navigationItem, index) => (
        <li key={index} className="nav-item">
          <Link button={navigationItem} linkClass="nav-link" />
        </li>
      ))}
    </Nav>
  )
}

export default Navigation
