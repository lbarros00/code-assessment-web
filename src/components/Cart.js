import React from 'react'
import PropTypes from 'prop-types'
import ProductsList from './ProductsList'
import CartList from './CartList'
import '../styles/cart.css'
  
const Cart  = ({ products, total, onCheckoutClicked }) => {
  let showPopUp = true;
  var closePopUp = function() {
    showPopUp = true;
  }
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    <ProductsList title="">
      {products.map(product =>
        <CartList
          key={product.id}
          product={product} />
      )}
    </ProductsList>
  ) : (
    <div className="cart">
      <img src={require("../img/cart_icon.png")} alt="icon of a shopping cart"/>
      <p>Please add some products to cart.</p>
    </div>
  )

  return (
    showPopUp ? (
      <div className="cart-opacity">
        <div className="cart-modal">
          <h3>
            Your Cart
            <button id="closePopUp" onClick={closePopUp}><img src={require("../img/x-icon.png")} alt="icon of an x"/></button>
          </h3>
          <hr/>
          {nodes}
          <hr/>
          <p>Total <span className="price">&#36;{total}</span></p>
          <button
            onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </button>
        </div>
      </div>
      ) : null
  )
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
