import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = ({ products, total}) => (
  <div>
    <h2>Acme Store</h2>
    <hr/>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
