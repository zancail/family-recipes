import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const WallOfTextComponent = ({ text }) => <div>{renderRichText(text, {})}</div>

export default WallOfTextComponent

export const modelName = "ContentfulWallOfTextComponent"

export const query = graphql`
  fragment WallOfTextComponentFragment on ContentfulWallOfTextComponent {
    text {
      raw
    }
    __typename
  }
`
