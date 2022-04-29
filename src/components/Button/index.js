import React from 'react'
import { graphql, Link } from 'gatsby'
import { URL_TYPES } from '@constants'

const Button = ({ button }) => {
  const content = () => {
    const linkedModel = button.link?.internalUrl
    let url = ''
    if (linkedModel) {
      url = `/${linkedModel.node_locale}/${URL_TYPES[linkedModel.__typename]}/${
        linkedModel.slug
      }`
      return (
        <Link
          to={`${url}`}
          className={`btn btn-${button.buttonType[0]} btn-lg px-4 gap-3`}
        >
          {button.text}
        </Link>
      )
    } else if (button.link?.externalUrl) {
      url = button.link.externalUrl
      return (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={`btn btn-${button.buttonType[0]} btn-lg px-4 gap-3`}
        >
          {button.text}
        </a>
      )
    } else {
      return <a href="">{button.text}</a>
    }
  }

  return content()
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
