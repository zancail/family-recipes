import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const WallOfText = ({ text }) => <div>{renderRichText(text, {})}</div>

export default WallOfText

export const modelName = 'ContentfulWallOfTextComponent'

export const query = graphql`
  fragment WallOfTextComponentFragment on ContentfulWallOfTextComponent {
    text {
      raw
    }
    contentful_id
    __typename
  }
`
