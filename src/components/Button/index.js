import React from 'react'
import { graphql, Link } from 'gatsby'

const Button = ({ button }) => {
  const linkedModel = button.link.linkedModel
  const url = `/${linkedModel.node_locale}/pages/${linkedModel.slug}`
  return (
    <Link
      to={`${url}`}
      className={`btn btn-${button.buttonType[0]} btn-lg px-4 gap-3`}
    >
      {button.text}
    </Link>
  )
}

export default Button

export const query = graphql`
  fragment ContentfulButtonFragment on ContentfulButton {
    text
    link {
      linkedModel {
        contentful_id
        title
        slug
        node_locale
        __typename
      }
    }
    buttonType
  }
`
