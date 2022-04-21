import React from "react"
import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import WallOfTextComponent, {
  modelName as WallOfTextComponentModelName,
} from "../components/wall-of-text-component"
import QuoteComponent, {
  modelName as QuoteComponentModelName,
} from "../components/quote-component"

const RecipeContentfulTemplate = (props) => {
  const recipe = props.data.contentfulRecipe
  const image = getImage(recipe.image)
  const { previous, next } = props.pageContext
  const content = () => {
    if (recipe.contentReferences) {
      return recipe.contentReferences.map((reference) => {
        switch (reference.__typename) {
          case WallOfTextComponentModelName: {
            return <WallOfTextComponent {...reference} />
          }
          case QuoteComponentModelName: {
            return <QuoteComponent {...reference} />
          }
          default:
            return null
        }
      })
    }
    return (
      <div>
        <h2>Preparation</h2>
        <div>{renderRichText(recipe.preparation, {})}</div>
      </div>
    )
  }

  return (
    <Layout location={props.location}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h1>{recipe.title}</h1>
            {recipe.tags && (
              <ul className="list-unstyled d-flex mx-n1 mb-4">
                {recipe.tags.map((tag, i) => {
                  return (
                    <li key={i} className="badge badge-pill bg-info mx-1">
                      {tag.title}
                    </li>
                  )
                })}
              </ul>
            )}
            <div>{renderRichText(recipe.intro, {})}</div>
            {content()}
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="card border">
              <div className="card__image-placeholder">
                <GatsbyImage
                  className="card__image"
                  image={image}
                  alt={recipe.title}
                />
              </div>
              <div className="card-body">
                <h2 className="h4">Ingredients</h2>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled d-flex justify-content-between">
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
      contentReferences {
        ...WallOfTextComponentFragment
        ...QuoteComponentFragment
      }
    }
  }
`
