import React from 'react'
import { graphql } from 'gatsby'
import Button from '../Button'

const Hero = ({ backgroundColor, backgroundMedia, content }) => {
  return (
    <div
      className={`bg--image py-5 mb-5 mt-n5 bg-${backgroundColor[0]}`}
      style={{ backgroundImage: `url(${backgroundMedia?.file?.url}` }}
    >
      <div className="container position-relative z-index-1">
        <h1 className="display-5 fw-bold">{content.title}</h1>
        <div className="col-lg-6">
          <p className="lead mb-4">{content.body.body}</p>
          {content.buttons && (
            <div className="d-grid gap-2 d-sm-flex ">
              <Button button={content.buttons} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero

export const query = graphql`
  fragment ContentfulHeroFragment on ContentfulHero {
    backgroundColor
    backgroundMedia {
      file {
        url
        contentType
      }
      gatsbyImageData(width: 2000)
    }
    content {
      title
      body {
        body
      }
      buttons {
        ...ContentfulButtonFragment
      }
    }
    __typename
  }
`
