import React from 'react'
import { graphql } from 'gatsby'

const Quote = ({ quote, author }) => (
  <blockquote className="blockquote">
    <p>{quote.quote}</p>
    <footer className="blockquote-footer">{author}</footer>
  </blockquote>
)

export default Quote

export const modelName = 'ContentfulQuoteComponent'

export const query = graphql`
  fragment QuoteComponentFragment on ContentfulQuoteComponent {
    quote {
      quote
    }
    contentful_id
    author
    __typename
  }
`
