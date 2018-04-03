import React from 'react'
import FadeIn from './components/atoms/FadeIn'
import Routes from './Routes'
import Footer from './components/molecules/Footer'

const App = () => (
  <FadeIn>
    <div className="app">
      <Routes />
      <Footer />
    </div>
  </FadeIn>
)

export default App
