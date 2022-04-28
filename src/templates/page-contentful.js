import { graphql } from 'gatsby'
import React from 'react'
import { Layout, Seo } from '@components'

const PageContentTemplate = (props) => {
  const page = props.data.contentfulPage
  const pageTranslations = props.data.allContentfulPage
  const nodeLocale = props.pageContext.locale

  let newMenu = []

  const currentUrl = props.location.pathname
  const currentUrlArray = currentUrl.split('/')
  pageTranslations.edges.map(({ node: item }) => {
    const newMenuItem = {}
    newMenuItem.langKey = item.node_locale
    let newUrl = currentUrlArray
    newUrl[1] = item.node_locale
    newUrl[newUrl.length - 1] = item.slug
    newUrl = newUrl.join('/')
    newMenuItem.link = newUrl
    newMenuItem.selected = nodeLocale === item.node_locale
    newMenu.push(newMenuItem)
  })
  return (
    <Layout location={props.location} newMenu={newMenu}>
      <Seo title={page.title} />
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
