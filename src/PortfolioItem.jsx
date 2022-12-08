import {Routes, Route, useNavigate} from 'react-router-dom';
import "./styles/portfolio.css"

function PortfolioItem(props) {

    
    const navigate = useNavigate();

    const navigateToPage = () => {
       navigate(props.url)
    }
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