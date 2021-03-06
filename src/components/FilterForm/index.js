import React from 'react'
import { useTranslation } from 'react-i18next'

const FilterForm = (props) => {
  const { t } = useTranslation()
  const recipeTags = props.recipeTags

  let filteredData = props.items

  const handleOnSortChange = (event) => {
    const query = event.target.value

    filteredData = filteredData.sort((a, b) => {
      if (query === 'asc') {
        return new Date(a.node.createdAt) - new Date(b.node.createdAt)
      }
      if (query === 'desc') {
        return new Date(b.node.createdAt) - new Date(a.node.createdAt)
      }
      return 0
    })
    props.parentCallback({ query, filteredData })
  }

  const handleTagsChange = (event) => {
    const query = event.target.value

    filteredData = props.items.filter((r) => {
      if (!r.node.tags) return false
      return r.node.tags.some((i) => i.id === query)
    })

    props.parentCallback({ query, filteredData })
  }

  return (
    <form action="" className="row">
      <div className="form-group col-lg-4">
        <label htmlFor="sort">{t('sort')}</label>
        <select
          name="sort"
          id="sort"
          className="form-control"
          onChange={handleOnSortChange}
        >
          <option value="desc">{t('newest first')}</option>
          <option value="asc">{t('oldest first')}</option>
        </select>
      </div>
      {recipeTags.length && (
        <div className="form-group col-lg-4">
          <label htmlFor="tags">Tags</label>
          <select
            name="tags"
            id="tags"
            className="form-control"
            onChange={handleTagsChange}
          >
            <option value="" empty="true">
              {t('show all')}
            </option>
            {recipeTags.map((recipeTag, index) => {
              return (
                <option key={index} value={recipeTag.id}>
                  {recipeTag.title}
                </option>
              )
            })}
          </select>
        </div>
      )}
    </form>
  )
}

export default FilterForm
