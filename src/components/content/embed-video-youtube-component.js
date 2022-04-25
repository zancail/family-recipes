import React from 'react'
import { graphql } from 'gatsby'
import Plyr from 'plyr-react'

const EmbedVideoYoutubeComponent = ({ urlOrId }) => {
  const regEx =
    '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)'
  const videoId = urlOrId.urlOrId.match(regEx)[1]
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: videoId,
        provider: 'youtube',
      },
    ],
  }
  return <div>{videoId && <Plyr source={videoSrc} />}</div>
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
