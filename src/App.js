import { Navigate, Route, Routes } from 'react-router-dom'
import Home from 'components/pages/Home'
import Products from 'components/pages/Products'
import Stores from 'components/pages/Stores'
import Contact from 'components/pages/Contact'
import Company from 'components/pages/Company'
import Header from 'components/Header'
import Footer from 'components/Footer'
import useDimensions from 'hooks/useDimensions'
import { createContext, useState } from 'react'

export const DimensionsContext = createContext()

const App = () => {
  const { width, height } = useDimensions()

  const [showingTopBtn, setShowingTopBtn] = useState(false)

  const goTop = () => {}

  return (
    <DimensionsContext.Provider value={{ width, height }}>
      <div className="relative min-h-screen">
        <Header showingTopBtn={showingTopBtn} />
        <main className="text-center pb-24 pt-6 px-4 max-w-5xl lg:mx-auto">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </DimensionsContext.Provider>
  )
}

export default App
