import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next'
import useGeneratedLangMenu from '../hooks/useGeneratedLangMenu'

import {
  Layout,
  IngredientList,
  PlyrWrapper,
  ReviewForm,
  ReviewList,
  Seo,
} from '@components'

import { componentMapper } from '@utils'

const RecipeContentfulTemplate = (props) => {
  const { t } = useTranslation()

  const recipe = props.data.contentfulRecipe
  const recipes = props.data.allContentfulRecipe
  const image = getImage(recipe.image)
  const { previous, next, nodeLocale } = props.pageContext

  const menu = useGeneratedLangMenu(
    recipes,
    nodeLocale,
    props.location.pathname
  )

  // Hooks
  const [currentServings, setCurrentServings] = useState(recipe.servings)
  const [activeMetrics, setActiveMetrics] = useState('eu')
  const [reviewItems, setReviewItems] = useState([])

  const addReviewItem = (reviewItem) => {
    let items = [...reviewItems, reviewItem]
    setReviewItems(items)
  }

  const updateServings = (e) => {
    setCurrentServings(e.currentTarget.value)
  }

  const updateMetrics = (e) => {
    setActiveMetrics(e.target.id)
  }

  return (
    <Layout location={props.location} newMenu={menu}>
      <Seo title={recipe.title} />
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
            {recipe.contentReferences?.map((element) =>
              componentMapper(element)
            )}
            {recipe.tutorial && (
              <PlyrWrapper>
                <video className="js-player" playsInline controls>
                  <source
                    src={recipe.tutorial.file.url}
                    type={recipe.tutorial.file.contentType}
                  />
                </video>
              </PlyrWrapper>
            )}
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
                          checked={activeMetrics === 'eu'}
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
                          checked={activeMetrics === 'us'}
                          onChange={updateMetrics}
                        />
                        <label htmlFor="us">US</label>
                      </div>
                    </div>
                  </div>
                </div>
                <IngredientList
                  ingredients={recipe.ingredients}
                  currentServings={currentServings}
                  servings={recipe.servings}
                  activeMetrics={activeMetrics}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="row my-4">
          <div className="col-lg-6">
            <h2>{t('recipe.reviews title')}</h2>
            {reviewItems.length ? (
              <ReviewList reviews={reviewItems} />
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
          <div className="col-lg-6">
            <ReviewForm addReviewItem={addReviewItem} />
          </div>
        </div>

        {/* Recipe navigation */}
        <ul className="list-unstyled d-flex justify-content-between">
          <li>
            {previous && (
              <Link to={`/${nodeLocale}/recipes/${previous.slug}/`} rel="prev">
                Previous: {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${nodeLocale}/recipes/${next.slug}/`} rel="next">
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
  query ContentfulRecipeBySlug(
    $slug: String!
    $contentfulId: String
    $nodeLocale: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    locales: allLocale(filter: { language: { eq: $nodeLocale } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    contentfulRecipe(slug: { eq: $slug }) {
      contentful_id
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
      tutorial {
        file {
          url
          contentType
        }
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
        ...EmbedVideoYoutubeComponentFragment
      }
    }
    allContentfulRecipe(filter: { contentful_id: { eq: $contentfulId } }) {
      edges {
        node {
          title
          node_locale
          slug
        }
      }
    }
  }
`
