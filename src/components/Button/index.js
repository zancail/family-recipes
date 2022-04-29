import React from 'react'
import { graphql, Link } from 'gatsby'

const Button = ({ button }) => {
  const linkedModel = button.link.internalUrl
  let url = ''
  const content = () => {
    if (linkedModel) {
      url = `/${linkedModel.node_locale}/pages/${linkedModel.slug}`
      return (
        <Link
          to={`${url}`}
          className={`btn btn-${button.buttonType[0]} btn-lg px-4 gap-3`}
        >
          {button.text}
        </Link>
      )
    } else if (button.link.externalUrl) {
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
        slug
        node_locale
      }
    }
    buttonType
  }
`
