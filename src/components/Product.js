import React from 'react'
import PropTypes from 'prop-types'
import '../styles/product.css'

const Product = ({ price, inventory, title, image }) => (
  <div className="product-card">
  	<img src={image} alt={`A ${title} wrist watch`}/>
  	<h2>
      {title} &#36;{price}
    </h2>
    <p>{inventory ? `${inventory} REMAINING` : null}</p>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
}

export default Product
