import React from "react"
import { Link, graphql } from "gatsby"

import "../styles/app.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import RecipeList from "../components/recipe-list"

// markup
class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const recipes = data.allContentfulRecipe.edges

    return (
      <div>
        <Header />
        <main>
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
        </main>
        <Footer />
      </div>
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
