import * as React from 'react'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const RecipeListItem = (props) => {
  const { t } = useTranslation()
  const title = props.recipe.title || props.recipe.slug
  const image = getImage(props.recipe.image)

  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    console.log('Save button has updated')
  }, [isSaved])

  const toggleIsSaved = () => {
    setIsSaved(!isSaved)
  }

  return (
    <li key={props.recipe.slug} className="col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className="card h-100">
        <div className="card__image-placeholder">
          <GatsbyImage className="card__image" image={image} alt={title} />
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h2 className="h4">
              <Link
                className="card__link"
                to={`/${props.recipe.node_locale}/recipes/${props.recipe.slug}/`}
              >
                {title}
              </Link>
            </h2>
            <div className="card__intro">
              {renderRichText(props.recipe.intro)}
            </div>
          </div>
          <span className="d-inline-block mt-4">{t('view recipe')}</span>
          <button
            type="button"
            onClick={toggleIsSaved}
            className={`btn border align-self-end card--recipe__link-btn ${
              isSaved ? 'btn-danger' : 'bg-white'
            }`}
          >
            <i
              className={`${isSaved ? 'fa' : 'far'} fa-heart`}
              aria-hidden="true"
            ></i>
            <span className="visually-hidden">Save</span>
          </button>
        </div>
      </div>
    </li>
  )
}

export default RecipeListItem
