import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

import RecipeList from '../components/recipe-list'
import Layout from '../components/Layout'

const IndexPage = (props) => {
  const { data } = props
  const allRecipes = data.allContentfulRecipe.edges || []
  const emptyQuery = ''

  const [state, setState] = useState({ filteredData: [], query: emptyQuery })

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery

  const recipes = hasSearchResults ? filteredData : allRecipes

  const handleOnSortChange = (event) => {
    const query = event.target.value

    const filteredData = allRecipes.sort((a, b) => {
      if (query === 'asc') {
        return new Date(a.node.createdAt) - new Date(b.node.createdAt)
      }
      if (query === 'desc') {
        return new Date(b.node.createdAt) - new Date(a.node.createdAt)
      }
    })

    setState({
      query,
      filteredData,
    })
  }

  return (
    <Layout location={props.location}>
      <div className="container">
        <title>Home Page</title>
        <h1>Family Recipes</h1>

        {/* Filter form */}
        <form action="" className="row">
          <div className="form-group col-lg-4">
            <label htmlFor="sort">Sort</label>
            <select
              name="sort"
              id="sort"
              className="form-control"
              onChange={handleOnSortChange}
            >
              <option value="desc">Date descending</option>
              <option value="asc">Date ascending</option>
            </select>
          </div>
        </form>

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
