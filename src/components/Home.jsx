import classes from './Home.module.css';
import User from './user';



function Home(){
    
    return(
        <div className={classes.home}>
            <h1>Hello and Welcome !</h1>
            <p>
            "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."" -Steve Jobs
            </p>
            <User />

        </div>
    )
}
export default Home;