import React from 'react'
import PropTypes from 'prop-types'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import '../styles/cart.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  togglePopup() {
  	console.log(this.state.show);
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
	  <div>
	    <h2>Acme Store 
		<button id="cart-btn" onClick={()=>this.togglePopup()}> <span id="cart-msg"> {this.props.products.length == 0 ? "Your cart is empty" : this.props.products.length}</span></button>
	    </h2>
	    <hr/>
	    <ProductsContainer />
	    <CartContainer showPopUp={this.state.show} />
	  </div>)}
}

App.propTypes = {
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(App)
