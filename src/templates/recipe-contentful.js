import React from "react"
import { Link, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"
// Ingredients
import IngredientComponent from "../components/ingredient-component"

// Content Components
import WallOfTextComponent, {
  modelName as WallOfTextComponentModelName,
} from "../components/wall-of-text-component"
import QuoteComponent, {
  modelName as QuoteComponentModelName,
} from "../components/quote-component"

const RecipeContentfulTemplate = (props) => {
  const recipe = props.data.contentfulRecipe
  const image = getImage(recipe.image)
  const { previous, next, nodeLocale } = props.pageContext
  const content = () => {
    if (recipe.contentReferences) {
      return recipe.contentReferences.map((reference, index) => {
        switch (reference.__typename) {
          case WallOfTextComponentModelName: {
            return <WallOfTextComponent key={index} {...reference} />
          }
          case QuoteComponentModelName: {
            return <QuoteComponent key={index} {...reference} />
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

  // Hooks
  const [currentServings, setCurrentServings] = useState(recipe.servings)
  const [activeMetrics, setActiveMetrics] = useState("eu")

  const updateServings = (e) => {
    setCurrentServings(e.currentTarget.value)
  }

  const updateMetrics = (e) => {
    setActiveMetrics(e.target.id)
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
                <div className="d-flex justify-content-between">
                  <div>
                    Servings:
                    <input
                      type="number"
                      name="servings"
                      id="servings"
                      min="1"
                      value={currentServings}
                      onChange={updateServings}
                    />
                  </div>
                  <div className="flex-shrink-0">
                    Metrics:
                    <div className="border rounded-1 d-flex">
                      <div className="custom-radio-group">
                        <input
                          type="radio"
                          name="metrics"
                          id="eu"
                          checked={activeMetrics === "eu"}
                          className="custom-radio visually-hidden"
                          onChange={updateMetrics}
                        />
                        <label htmlFor="eu">EU</label>
                      </div>
                      <div className="custom-radio-group">
                        <input
                          type="radio"
                          name="metrics"
                          id="us"
                          className="custom-radio visually-hidden"
                          checked={activeMetrics === "us"}
                          onChange={updateMetrics}
                        />
                        <label htmlFor="us">US</label>
                      </div>
                    </div>
                  </div>
                </div>
                {recipe.ingredients && (
                  <div>
                    <h2 className="h4">Ingredients</h2>
                    <table>
                      <tbody>
                        {recipe.ingredients.map((ingredient, i) => {
                          return (
                            <IngredientComponent
                              ingredient={ingredient}
                              servings={currentServings}
                              originalServings={recipe.servings}
                              key={i}
                              usedMetric={activeMetrics}
                            />
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled d-flex justify-content-between">
          <li>
            {previous && (
              <Link
                to={`/${nodeLocale.toLowerCase()}/recipes/${previous.slug}/`}
                rel="prev"
              >
                Previous: {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={`/${nodeLocale.toLowerCase()}/recipes/${next.slug}/`}
                rel="next"
              >
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
      servings
      ingredients {
        unit
        quantity
        name
      }
      contentReferences {
        ...WallOfTextComponentFragment
        ...QuoteComponentFragment
      }
    }
  }
`
