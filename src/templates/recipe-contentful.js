import React from "react"
import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

class RecipeContentfulTemplate extends React.Component {
  render() {
    const recipe = this.props.data.contentfulRecipe
    const image = getImage(recipe.image)
    const { previous, next } = this.props.pageContext

    return (
      <Layout>
        <div class="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>{recipe.title}</h1>
              {recipe.tags && (
                <ul className="list-unstyled d-flex mx-n1 mb-4">
                  {recipe.tags.map((tag, i) => {
                    return (
                      <li className="badge badge-pill bg-info mx-1">
                        {tag.title}
                      </li>
                    )
                  })}
                </ul>
              )}
              <div>{renderRichText(recipe.intro, {})}</div>
              <h2>Preparation</h2>
              <div>{renderRichText(recipe.preparation, {})}</div>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <div className="card border">
                <GatsbyImage image={image} alt={recipe.title} />
                <div class="card-body">
                  <h2 className="h4">Ingredients</h2>
                </div>
              </div>
            </div>
          </div>
          <ul class="list-unstyled d-flex justify-content-between">
            <li>
              {previous && (
                <Link to={"/" + previous.slug} rel="prev">
                  Previous: {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={"/" + next.slug} rel="next">
                  Next: {next.title}
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
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
      intro {
        raw
      }
      image {
        gatsbyImageData(width: 200)
      }
      tags {
        title
      }
    }
  }
`
