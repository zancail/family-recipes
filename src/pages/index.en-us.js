import React from "react"
import { graphql } from "gatsby"

import RecipeList from "../components/recipe-list"
import Layout from "../components/Layout"

const IndexPage = (props) => {
  const { data } = props
  const recipes = data.allContentfulRecipe.edges

  return (
    <Layout location={props.location}>
      <div className="container">
        <title>Home Page</title>
        <h1>Family Recipes</h1>

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
          intro {
            raw
          }
          image {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`
