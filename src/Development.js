import NavBar from "./NavBar"
import "./styles/project.css"

function Development() {
    return (
        <div>
            <NavBar/>
            <h1>Development</h1>
            <form action="https://fathomlessnarwal421.github.io/development">
        <button class="button" href="https://fathomlessnarwal421.github.io/development">Click to visit Stacy's!</button>
    </form>
        <div class="info-div">
            <h2>Overview</h2>
            <p>The goal of this project was to get comfortable using React components and states to 
                develop an interactive list-based interface. For my project, I chose to create a clothing store. The 
                user is able to add and remove items from their cart, and their cart will display and keep track of the 
                total price of the items in the cart. The user is also able to filter their items by the different categories available, which are tops, bottoms, and accessories. 
                They can also sort the items by featured items, price, or rating. The application makes it quick and easy for the user to pick out clothing items they need by filtering and sorting, and track their total spending price.
            </p>
        </div>
        </div>
    )
}

export default Development