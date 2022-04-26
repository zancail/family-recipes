import React from 'react'

const FilterForm = (props) => {
  const handleOnSortChange = (event) => {
    const query = event.target.value

    const filteredData = props.items.sort((a, b) => {
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
  return (
    <form action="" className="row">
      <div className="form-group col-lg-4">
        <label htmlFor="sort">Sort</label>
        <select
          name="sort"
          id="sort"
          className="form-control"
          onChange={handleOnSortChange}
        >
          <option value="desc">Date descending</option>
          <option value="asc">Date ascending</option>
        </select>
      </div>
    </form>
  )
}

export default FilterForm
