import React from 'react'
import PropTypes from 'prop-types'
import '../styles/product.css'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product-card">
    <img src={product.image} alt={`A ${product.title} wrist watch`}/>
    <h1>
      {product.title} <span className="price">&#36;{product.price}</span>
    </h1>
    <p>{product.inventory ? `${product.inventory} REMAINING` : null}</p>
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'ADD TO CART' : 'Sold Out'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func
}

export default ProductItem
