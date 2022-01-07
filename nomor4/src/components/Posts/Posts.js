import React, { useState } from "react";
import { useSelector } from "react-redux";

import Todo from "./Post/Post";

const Todos = ({ setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    console.log(posts)
    return (
        !posts.length ? <div>Loading</div> : (
            <div class="card-row">
                {posts.map((post)=> (
                    <div key={post.id}>
                        <Todo post={post} setCurrentId={setCurrentId}/>
                    </div>
                ))}
            </div>
        )
    )
}

export default Todos;