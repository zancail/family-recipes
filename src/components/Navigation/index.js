import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Nav } from 'react-bootstrap'
import Button from '../Button'

const Navigation = ({ currentLang }) => {
  const { allContentfulNavigation } = useStaticQuery(graphql`
    query {
      allContentfulNavigation(filter: { workingTitle: { eq: "main" } }) {
        edges {
          node {
            id
            node_locale
            __typename
            navigationItems {
              ...ContentfulButtonFragment
            }
          }
        }
      }
    }
  `)
  let translatedNavigation = allContentfulNavigation.edges.filter(
    ({ node: item }) => {
      return item.node_locale === currentLang
    }
  )
  translatedNavigation = { ...translatedNavigation[0].node }

  return (
    <Nav className="mx-n2 flex-grow-1">
      {translatedNavigation.navigationItems.map((navigationItem, index) => {
        navigationItem.buttonType = null
        return (
          <li key={index} className="nav-item px-2">
            <Button button={navigationItem} />
          </li>
        )
      })}
    </Nav>
  )
}

export default Navigation
