import "./styles/portfolio.css"

function PortfolioItem(props) {

    

    return (
        <div>
            <form action={props.url}>
            <button class="button" href={props.url}>{props.name}</button>
            </form>
        <img src={props.photo} class="portfolio_img"/>
        
        </div>
    );
}

export default PortfolioItem