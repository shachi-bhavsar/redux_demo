import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, name, onClick }) => {
  if (active) {
    return <span>{name}</span>
  }
  return (
    <a href="#"
       onClick={e => {
         onClick()
       }}
    >
    {name}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link