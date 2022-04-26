import React, { useState } from 'react'
import { graphql } from 'gatsby'

import RecipeList from '../components/recipe-list'
import Layout from '../components/Layout'
import FilterForm from '../components/filter-form'

const IndexPage = (props) => {
  const { data } = props
  const allRecipes = data.allContentfulRecipe.edges || []
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
      <div className="container">
        <title>Home Page</title>
        <h1>Family Recipes</h1>

        {/* Filter form */}
        <FilterForm items={allRecipes} parentCallback={handleCallback} />

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
    allContentfulRecipe(filter: { node_locale: { eq: "en-US" } }) {
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
  }
`
