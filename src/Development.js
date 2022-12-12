import NavBar from "./NavBar"
import "./styles/project.css"

function Development() {
    return (
        <div>
            <NavBar/>
            <h1>Development</h1>
            <form action="https://fathomlessnarwal421.github.io/development">
        <button class="button" onClick=" window.open('https://fathomlessnarwal421.github.io/development', '_blank)'">Click to visit Stacy's!</button>
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
        <div class="info-div">
            <h2>Usability Principles Considered</h2>
            <ul>
                <li>The layout prioritizes the clothing items in the center of the screen. </li>
                <li>The cart is displayed on the right and is always displayed on the screen so the user can track their total price. </li>
                <li>The filter and sort options are on the left of the clothing items and grouped together to make finding all these options more intuitive. </li>
                <li>All the buttons look the same so that the user will be able to understand what parts of the screen are buttons.</li>
                <li>Different font weights are used to indicate hierarchy in the text, like for the shop name or the titles of the clothing items. </li>
                <li>The design maintains a minimalist design with only a few chosen colors to keep the website as intuitive and easy to use as possible.</li>
            </ul>
        </div>

        <div class="info-div">
            <h2>Components and State Changes</h2>
            <p>The items in clothesItems are passed to the Menu component and displayed from there. The props that the Menu component takes in are the item and a button for the addToCart function. Similarly, the price, cartData, cartItems, and 2 button variables are passed to the Cart component as props and displayed from there.
            The user triggers state changes by changing the options on the sort by drop down or the filtering buttons. These will change the state of clothesItems and filter or sort accordingly depending on the options selected. The user also triggers state changes by clicking the add to cart button or clicking the + - buttons in the cart to change the number of the items in the cart. This updates the cart items as well as the price.
            </p>
        </div>
        </div>
    )
}

export default Development