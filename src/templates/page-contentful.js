import { graphql } from 'gatsby'
import React from 'react'
import { Layout, Seo } from '@components'
import useGeneratedLangMenu from '../hooks/useGeneratedLangMenu'
import { componentMapper } from '@utils'

const PageContentTemplate = (props) => {
  const page = props.data.contentfulPage
  const pageTranslations = props.data.allContentfulPage
  const nodeLocale = props.pageContext.locale

  const menu = useGeneratedLangMenu(
    pageTranslations,
    nodeLocale,
    props.location.pathname
  )

  return (
    <Layout location={props.location} newMenu={menu}>
      <Seo title={page.title} />
      {page.hero && componentMapper(page.hero)}
      <div className="container">
        <h1>{page.title}</h1>
      </div>
    </Layout>
  )
}

export default PageContentTemplate

export const query = graphql`
  query getContentfulPage($id: String!, $contentfulId: String!) {
    contentfulPage(id: { eq: $id }) {
      title
      hero {
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
        }
        __typename
      }
    }
    allContentfulPage(filter: { contentful_id: { eq: $contentfulId } }) {
      edges {
        node {
          slug
          node_locale
        }
      }
    }
  }
`
