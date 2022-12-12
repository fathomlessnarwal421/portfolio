import "./styles/portfolio.css"

function PortfolioItem(props) {

    

    return (
        <div class="project">
            <form action={props.url}>
            <button class="button" href={props.url}>{props.name}</button>
            </form>
            <p>{props.description}</p>
        <img onmouseover="this.style.visibility = 'hidden';" onmouseout="this.style.visibility = 'visible';" src={props.photo} class="portfolio_img"/>
        
        </div>
    );
}

export default PortfolioItem