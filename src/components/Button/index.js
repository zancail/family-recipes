import React from 'react'
import { graphql, Link } from 'gatsby'

const Button = ({ button }) => {
  return (
    <Link
      to={`${button.internalLink}`}
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
    internalLink
    buttonType
  }
`
