import NavBar from "./NavBar"
import Container from 'react-bootstrap/Container';
import PortfolioItem from "./PortfolioItem"
import "./styles/portfolio.css"

function Home() {
    return (
        <div>
    <NavBar/>
    <div class="about">
      <h1>FathomlessNarwal421's UIUX Portfolio</h1>
      <p>Hello! Welcome to my portfolio! Below you can check out the projects I completed in CSCI1300: User Interfaces
        and User Experience. Each of these projects explore a different aspect of creating effective interfaces and show applications 
        of different usabiliy principles. 
      </p>
    </div>
    <Container>
    <div class="grid-container">
    <div class="grid-item">

<PortfolioItem url={"/Iterative-Design"} name={"Iterative Design"} photo={process.env.PUBLIC_URL+"assets/knowtex.png"}/>
</div>
      <div class="grid-item">
        <PortfolioItem url={"/Responsive-Redesign"} name={"Responsive Redesign"} photo={"assets/booksonsquare.png"}/>
      </div>
      <div class="grid-item">
        <PortfolioItem url={"/Personas-Storyboarding"} name={"Personas and Storyboarding"} photo={"assets/empathy_map.png"}/>
      </div>
      <div class="grid-item">
        <PortfolioItem url={"Development"} name={"Development"} photo={"assets/stacys.png"}/> 
      </div>
    </div>
    </Container>
    </div>

    )
}

export default Home