import React from 'react'
import Home from './Layout/Home'
import Shop from './Layout/Shop'
import about from './Layout/about'
import contact from './Layout/contact'
import product from './Layout/product'
import {BrowserRouter , Route} from 'react-router-dom'

export default function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component= {Home} />
      <Route path="/Shop" component= {Shop} />
      <Route path="/about" component= {about} />
      <Route path="/contact" component= {contact} />
      <Route path="/product" component= {product} />
    </BrowserRouter>
    </div>
  )
}
