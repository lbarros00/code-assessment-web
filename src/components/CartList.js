import React from 'react'
import PropTypes from 'prop-types'
import "../styles/cart.css"

const CartList = ({ product }) => (
  <div>
	  <div className="cart-card">
	  	<img src={product.image} alt={`A ${product.title} wrist watch`}/>
	    <h1>
	      {product.title}
	    </h1>
	    <p>&#36;{product.price}</p>
	    <p><button className="remove">Remove</button></p>
	  </div>
	  <button className="qty-button">Inc</button>
	  <br/>
  </div>
)

CartList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
}

export default CartList
