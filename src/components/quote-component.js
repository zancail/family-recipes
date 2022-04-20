import React from "react"
import { graphql } from "gatsby"

const QuoteComponent = ({ quote, author }) => (
  <blockquote className="blockquote">
    <p>{quote.quote}</p>
    <footer className="blockquote-footer">{author}</footer>
  </blockquote>
)

export default QuoteComponent

export const modelName = "ContentfulQuoteComponent"

export const query = graphql`
  fragment QuoteComponentFragment on ContentfulQuoteComponent {
    quote {
      quote
    }
    author
    __typename
  }
`
