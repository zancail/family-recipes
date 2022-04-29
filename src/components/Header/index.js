import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import useScrollPosition from '../../hooks/useScrollPosition'
import { LangSwitcher, Navigation } from '@components'

const Header = ({ langs, currentLang }) => {
  const scrollPos = useScrollPosition()
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulNavigation(filter: { workingTitle: { eq: "main" } }) {
            edges {
              node {
                id
                node_locale
                __typename
                navigationItems {
                  node_locale
                  text
                  link {
                    internalUrl {
                      slug
                      node_locale
                    }
                    externalUrl
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <header
          className={`header bg-primary text-white mb-4 ${
            scrollPos > 40 ? 'header--shrink' : ''
          }`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <div>Family Recipes</div>
            <div className="d-flex">
              <Navigation
                navigation={data.allContentfulNavigation.edges}
                currentLang={currentLang}
              />
              <LangSwitcher langs={langs} />
            </div>
          </div>
        </header>
      )}
    />
  )
}

export default Header
