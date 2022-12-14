import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import PortfolioItem from './PortfolioItem';
import {Routes, Route, HashRouter, BrowserRouter} from 'react-router-dom';
import Knowtex from "./Knowtex"
import Home from "./Home"
import ResponsiveRedesign from './ResponsiveRedesign';
import Personas from "./Personas";
import Development from "./Development"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route exact path="/Iterative-Design" element={<Knowtex />} />
          <Route exact path="/Responsive-Redesign" element={<ResponsiveRedesign />} />
          <Route exact path="/Personas-Storyboarding" element={<Personas/>} />
          <Route exact path="/Development" element={<Development/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    // <div>
    // <NavBar/>
    // <div class="about">
    //   Intro paragraph goes here
    // </div>
    // <Container>
    // <div class="grid-container">
    //   <div class="grid-item">
    //     <BrowserRouter>
    //     <PortfolioItem url={"/Knowtex"}/>
    //     </BrowserRouter>
    //   </div>
    //   <div class="grid-item">
    //     <PortfolioItem/>
    //   </div>
    //   <div class="grid-item">
    //     <PortfolioItem/>
    //   </div>
    //   <div class="grid-item">
    //     <PortfolioItem/>
    //   </div>
    // </div>
    // </Container>
    // </div>
  );
}

export default App;
