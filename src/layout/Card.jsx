import classes from './Card.module.css';
import { Link } from "react-router-dom";

function Card(props){
   
        return(
        <div className={classes.card}>
            <h1 className={classes.titre}>{props.name} {props.username}</h1>
            <p>{props.email}</p>
            <p>{props.address.street} {props.address.suite} {props.address.city}</p>
            <p>{props.phone}</p>
            <p>{props.website}</p>
            <p>{props.company.name}</p>
            <Link to={'/users/'+props.id} className={classes.button}>Wanna see my Posts ?</Link>
            
        </div>
    );
}
export default Card;