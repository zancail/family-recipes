import { EmbedVideoYoutube, Quote, WallOfText } from '@components'

import { CONTENT_TYPES } from '@constants'
import React from 'react'

const componentMapper = (element) => {
  if (element) {
    switch (element.__typename) {
      case CONTENT_TYPES.WALL_OF_TEXT: {
        return <WallOfText key={element.contentful_id} {...element} />
      }
      case CONTENT_TYPES.QUOTE: {
        return <Quote key={element.contentful_id} {...element} />
      }
      case CONTENT_TYPES.EMBED_VIDEO_YOUTUBE: {
        return <EmbedVideoYoutube key={element.contentful_id} {...element} />
      }
      default:
        return null
    }
  }
}

export default componentMapper
