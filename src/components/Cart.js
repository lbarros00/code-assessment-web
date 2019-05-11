import React from 'react'
import PropTypes from 'prop-types'
import ProductsList from './ProductsList'
import CartList from './CartList'
import '../styles/cart.css'

const Cart  = ({ products, total, onCheckoutClicked }) => {
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
      <img src={require("../img/cart_icon.png")}/>
      <p>Please add some products to cart.</p>
    </div>
  )

  return (
    <div className="cart-modal">
      <h3>
        Your Cart
        <img src={require("../img/x-icon.png")}/>
      </h3>
      <hr/>
      {nodes}
      <br/>
      <p>Total: &#36;{total}</p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
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
