import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ResumePage from "./pages/ResumePage";

function App() {
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
  );
}

export default App;






// import React from 'react'
// import { HashRouter, Route, BrowserRouter, Routes } from 'react-router-dom'
// import Wrapper from './components/Wrapper/index'
// import Navbar from './components/Navbar/index'
// import AboutMe from './pages/About'
// import Projects from './components/Portfolio'
// import Contact from './pages/Contact'
// import Footer from './components/Footer/index'
// import ResumePage from './pages/ResumePage'
// import { Nav } from 'react-bootstrap'

// const App = () => {
//   return (
//     <HashRouter basename="/">
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/" component={About} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/resume" component={ResumePage} />
//           <Route exact path="/portfolio" component={Portfolio} />
//           <Route exact path="/contact" component={Contact} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </HashRouter>
//   )
// // }
// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//       <Navbar />

//         <Routes>
         
//           <Route path="/" element={<AboutMe />} />
//           <Route path="/about" element={<AboutMe />} />
//           <Route path="/resume" element={<ResumePage />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/portfolio" element={<Projects />} />
          
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
