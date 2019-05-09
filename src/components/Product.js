import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, image }) => (
  <div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default Product
