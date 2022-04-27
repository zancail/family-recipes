import React from 'react'
import { graphql, navigate, withPrefix } from 'gatsby'
import { getUserLangKey } from 'ptz-i18n'

const RedirectIndex = () => {
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    const { langs, defaultLangKey } = require('../data/languages.js')
    const langKey = getUserLangKey(langs.keys, defaultLangKey)
    const homeUrl = withPrefix(`/${langKey}`)

    navigate(homeUrl)
  }

  // It's recommended to add your SEO solution in here for bots
  // eg. https://github.com/ahimsayogajp/ahimsayoga-gatsby/blob/master/src/pages/index.js#L22
  return <div />
}

export default RedirectIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
