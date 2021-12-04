import React, { useState, useEffect } from "react";
import classes from './UserPage.module.css';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
function UserPage(){
    const id= useParams();
    const [posts,setPosts] = useState([]);
    useEffect (()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id.id}`)
        .then(response => response.json())
        .then(data => {
            const postsFetch = [];
            for (const key in data){
                const post ={
                    id : key,
                    ...data[key]
                };
                postsFetch.push(post);
            }setPosts(postsFetch);
        });
    },[])
      return(
         <section>
             <div>
             <Link to='/' className={classes.button}>Return to Home Page </Link>
             </div>
             <div className={classes.container}>
                {posts.map((post)=>{
                    return(
                        <div className={classes.post}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                })}
            </div>
         </section>
        );

}
export default UserPage;