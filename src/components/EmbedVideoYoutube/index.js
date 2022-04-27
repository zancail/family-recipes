import React from 'react'
import { graphql } from 'gatsby'
import { PlyrWrapper } from '@components'

const EmbedVideoYoutube = ({ urlOrId }) => {
  const regEx =
    '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)'
  const videoId = urlOrId.urlOrId.match(regEx)[1]

  return (
    <div>
      {videoId && (
        <PlyrWrapper>
          <div
            className="js-player"
            data-plyr-provider="youtube"
            data-plyr-embed-id={videoId}
          />
        </PlyrWrapper>
      )}
    </div>
  )
}

export default EmbedVideoYoutube

export const modelName = 'ContentfulEmbedVideoYoutube'

export const query = graphql`
  fragment EmbedVideoYoutubeComponentFragment on ContentfulEmbedVideoYoutube {
    urlOrId {
      urlOrId
    }
    contentful_id
    __typename
  }
`
