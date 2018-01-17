
 import React from 'react'
 import PropTypes from 'prop-types'
 
 const Item = ({ onClick, OutOfStock, desc }) => (
   <li
     onClick={onClick}
     style={{
       textDecoration: OutOfStock ? 'line-through' : 'none'
     }}
   >
   {desc}
   </li>
 )
 
Item.propTypes = {
   onClick: PropTypes.func.isRequired,
   OutOfStock: PropTypes.bool.isRequired,
   desc: PropTypes.string.isRequired
 }
 
 export default Item
 