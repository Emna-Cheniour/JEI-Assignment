import React, { useState, useEffect } from "react"
import UsersList from "./UsersList";
function User(){
const [users,setUsers] = useState([]);
useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const usersFetch = [];
        for (const key in data){
            const user ={
                id : key,
                ...data[key]
            };
            usersFetch.push(user);
        }setUsers(usersFetch);
    });
},[])
  return(
     <section>
         <UsersList users={users} />
     </section>
    );
}
export default User;