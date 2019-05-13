import React from 'react'
import PropTypes from 'prop-types'
import "../styles/cart.css"

const CartList = ({ product }) => {
  return (
	  <section>
		  <div className="cart-card">
		  	<img src={product.image} alt={`A ${product.title} wrist watch`}/>
		    <h1>
		      {product.title}
		    </h1>
		    <p>&#36;{product.price}</p>
		    <p><button className="remove">Remove</button></p>
		  </div>
		  <div className="button-container">
			  <button id="left" className="qty-button">&#8722;</button>
			  <input type="text" value={product.inventory - (product.inventory - 1)} />
			  <button id="right" className="qty-button">&#43;</button>
		  </div>
		  <br/>
	  </section>
  )
}

CartList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
}

export default CartList
