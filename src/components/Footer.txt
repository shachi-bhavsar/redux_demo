import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_AVAILABLE">
      Available
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_OUTOFSTOCK">
      OutOfStock
    </FilterLink>
  </p>
)

export default Footer