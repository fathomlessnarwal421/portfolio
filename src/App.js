import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import PortfolioItem from './PortfolioItem';
import {Routes, Route, HashRouter} from 'react-router-dom';
import Knowtex from "./Knowtex"
import Home from "./Home"
import ResponsiveRedesign from './ResponsiveRedesign';
import Personas from "./Personas";
import Development from "./Development"


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="Iterative-Design" element={<Knowtex />} />
          <Route path="Responsive-Redesign" element={<ResponsiveRedesign />} />
          <Route path="Personas-Storyboarding" element={<Personas/>} />
          <Route path="Development" element={<Development/>} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </HashRouter>
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
