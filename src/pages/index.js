import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/app.scss"
import RecipeList from "../components/recipe-list"
import Layout from "../components/Layout"

// markup
class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const recipes = data.allContentfulRecipe.edges

    return (
      <Layout>
        <div class="container">
          <title>Home Page</title>
          <h1>Family Recipes</h1>
          {recipes.map(({ node }) => {
            const title = node.title || node.slug
            return (
              <div key={node.slug}>
                <h2>
                  <Link to={node.slug}>{title}</Link>
                </h2>
              </div>
            )
          })}
          <RecipeList />
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulRecipe {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
