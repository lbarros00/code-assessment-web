import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
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
		<button id="cart-btn" onClick={()=>this.togglePopup()}> <span id="cart-msg">Your cart is empty</span></button>
	    </h2>
	    <hr/>
	    <ProductsContainer />
	    <CartContainer showPopUp={this.state.show} />
	  </div>)}
}

export default App
