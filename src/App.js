import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Wrapper from './components/Wrapper/index'
import Navbar from './components/Navbar/index'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Footer from './components/Footer/index'
import ResumePage from './pages/ResumePage'

const App = () => {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
