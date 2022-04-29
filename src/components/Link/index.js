import React from 'react'
import { URL_TYPES } from '@constants'

import { Link as GatsbyLink } from 'gatsby'

const Link = ({ button, linkClass }) => {
  const linkedModel = button.link?.internalUrl
  let url = ''
  if (linkedModel) {
    url = `/${linkedModel.node_locale}/${URL_TYPES[linkedModel.__typename]}/${
      linkedModel.slug
    }`
    return (
      <GatsbyLink to={`${url}`} className={linkClass}>
        {button.text}
      </GatsbyLink>
    )
  } else if (button.link?.externalUrl) {
    url = button.link.externalUrl
    return (
      <a href={url} target="_blank" rel="noreferrer" className={linkClass}>
        {button.text}
      </a>
    )
  } else {
    return (
      <a href="" className={linkClass}>
        {button.text}
      </a>
    )
  }
}

export default Link
