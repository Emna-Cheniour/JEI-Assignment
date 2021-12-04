import Card from "../layout/Card";
import classes from './UserList.module.css';


function UsersList(props){
return(
    <div className={classes.list}>
    {props.users.map(user=>{
        return <Card id={user.id} name={user.name} username={user.username} email={user.email} address={user.address} phone={user.phone} website={user.website} company={user.company} />
    })}
    </div>
) 
}
export default UsersList;