import React from 'react'
import { graphql } from 'gatsby'
import Link from '../Link'

const Button = ({ button }) => {
  return (
    <Link
      button={button}
      linkClass={`btn btn-${button.buttonType} btn-lg px-4 gap-3`}
    />
  )
}

export default Button

export const query = graphql`
  fragment ContentfulButtonFragment on ContentfulButton {
    text
    link {
      externalUrl
      internalUrl {
        ... on ContentfulPage {
          slug
          node_locale
          __typename
        }
        ... on ContentfulRecipe {
          slug
          node_locale
          __typename
        }
      }
    }
    buttonType
  }
`
