import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

const EmbedVideoYoutubeComponent = ({ urlOrId }) => {
  const regEx =
    '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)'
  const videoId = urlOrId.urlOrId.match(regEx)[1]

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr')
      Array.from(document.querySelectorAll('.js-player')).map(
        (p) => new Plyr(p)
      )
    }
  })
  return (
    <div>
      {videoId && (
        <div
          className="js-player"
          data-plyr-provider="youtube"
          data-plyr-embed-id={videoId}
        />
      )}
    </div>
  )
}

export default EmbedVideoYoutubeComponent

export const modelName = 'ContentfulEmbedVideoYoutube'

export const query = graphql`
  fragment EmbedVideoYoutubeComponentFragment on ContentfulEmbedVideoYoutube {
    urlOrId {
      urlOrId
    }
    __typename
  }
`
