import React, { useState } from 'react'
import { graphql } from 'gatsby'

import { FilterForm, Layout, RecipeList, Seo } from '@components'

const IndexPage = (props) => {
  const { data } = props
  const allRecipes = data.allContentfulRecipe.edges || []
  const recipeTags = data.allContentfulRecipeTag.nodes
  const emptyQuery = ''

  const [state, setState] = useState({ filteredData: [], query: emptyQuery })

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery

  const recipes = hasSearchResults ? filteredData : allRecipes

  const handleCallback = (value) => {
    setState(value)
  }

  return (
    <Layout location={props.location}>
      <Seo title="Alle recepten" />
      <div className="container">
        <title>Home Page</title>
        <h1>Familie recepten</h1>

        {/* Filter form */}
        <FilterForm
          items={allRecipes}
          parentCallback={handleCallback}
          recipeTags={recipeTags}
        />

        <RecipeList recipes={recipes} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulRecipe(
      filter: { node_locale: { eq: "nl-BE" } }
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          node_locale
          contentful_id
          intro {
            raw
          }
          image {
            gatsbyImageData(width: 200)
          }
          createdAt
        }
      }
    }
    allContentfulRecipeTag(filter: { node_locale: { eq: "nl-BE" } }) {
      nodes {
        title
        node_locale
        createdAt
        id
      }
    }
  }
`
