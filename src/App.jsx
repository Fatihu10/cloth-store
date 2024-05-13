import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
import About from '../pages/About'
import ProductView from '../pages/ProductView'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='product/:id' element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App