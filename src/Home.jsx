import NavBar from "./NavBar"
import Container from 'react-bootstrap/Container';
import PortfolioItem from "./PortfolioItem"
import "./styles/portfolio.css"

function Home() {
    return (
        <div>
    <NavBar/>
    <div class="about">
      <div class="title">
      <img class="narwal_icon" src="assets/narwal2.png"></img>
      <h1>FathomlessNarwal421's UIUX Portfolio</h1>
      </div>
      
      <p>Hello! Welcome to my portfolio! Below you can check out the projects I completed in CSCI1300: User Interfaces
        and User Experience. Each of these projects explore a different aspect of creating effective interfaces and show applications 
        of different usabiliy principles. 
        </p>
    </div>
    <Container>
    <div class="grid-container">
    <div class="grid-item">

<PortfolioItem url={"/Iterative-Design"} name={"Iterative Design"} photo={"assets/knowtex.png"}
description={"This project focused on iterative design principles. We designed an interfacefor our chosen startup Knowtex, and then iterated on this design after receiving rounds of critiques. "}/>
</div>
      <div class="grid-item">
        <PortfolioItem url={"/Responsive-Redesign"} name={"Responsive Redesign"} photo={"assets/booksonsquare.png"}
        description={"In this project, I redesigned a webpage for a local business Books on the Square in order to make it more responsive and more intuitive to use. I explored different design elements to accomplish this task and create different displays for different devices. "}/>
      </div>
      <div class="grid-item">
        <PortfolioItem url={"/Personas-Storyboarding"} name={"Personas and Storyboarding"} photo={"assets/empathy_map.png"}
        description={"This project explores the user journey with different personas of people using a chosen interface. Based on the types of users encountered, I used a storyboard to map out one user's journey and interaction with this interface. "}/>
      </div>
      <div class="grid-item">
        <PortfolioItem url={"Development"} name={"Development"} photo={"assets/stacys.png"}
        description={"I used React components and states to create an interactive list-based interface that allows users to filter and sort items, and keep track of selected items in an aggregator component. "}/> 
      </div>
    </div>
    </Container>
    </div>

    )
}

export default Home