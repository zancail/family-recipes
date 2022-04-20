import React from "react"
import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

class RecipeContentfulTemplate extends React.Component {
  render() {
    const recipe = this.props.data.contentfulRecipe
    // const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <div>
        <h1>{recipe.title}</h1>
        <div>{renderRichText(recipe.preparation, {})}</div>
        <ul class="list-unstyled d-flex justify-content-between">
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                Previous: {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                Next: {next.title}
              </Link>
            )}
          </li>
        </ul>
      </div>
    )
  }
}

export default RecipeContentfulTemplate

export const pageQuery = graphql`
  query ContentfulRecipeBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulRecipe(slug: { eq: $slug }) {
      title
      preparation {
        raw
      }
    }
  }
`
