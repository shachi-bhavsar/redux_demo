import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = ({ reducer, onItemClick }) => (
  <ul>
    {reducer.map(list =>
      <Item
        key={list.id}
        {...list}
        onClick={() => onItemClick(list.id)}
      />
    )}
  </ul>
)

ItemList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        OutOfStock: PropTypes.bool.isRequired,
        desc: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onItemClick: PropTypes.func.isRequired
}

export default ItemList