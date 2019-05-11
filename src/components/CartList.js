import React from 'react'
import PropTypes from 'prop-types'
import "../styles/cart.css"

const CartList = ({ product }) => (
  <section>
	  <div className="cart-card">
	  	<img src={require("../img/beige_watch.png")} alt={`A ${product.title} wrist watch`}/>
	    <h1>
	      {product.title}
	    </h1>
	    <p>&#36;{product.price}</p>
	    <p><button className="remove">Remove</button></p>
	  </div>
	  <button id="left" className="qty-button">dec</button>
	  <input type="text"/>
	  <button id="right" className="qty-button">Inc</button>
	  <br/>
  </section>
)

CartList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
}

export default CartList
