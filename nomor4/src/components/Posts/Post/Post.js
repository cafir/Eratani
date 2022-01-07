import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../action/posts";

const Todo = ({post, setCurrentId}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePost(post.id))
        console.log(post) 
    }
    
    
    return (
        <div class="card card-shadow"
        onClick={() => setCurrentId(post.id)}>
            <div class="card-header">{post.title}</div>
            <div class="card-body">
                {post.createdAt}
            </div>
            <div class="card-body">
                {post.description}
            </div>
            <div class="card-footer">
                <button class="btn" onClick={handleDelete}>Delete</button>
            </div> 
        </div>
    )
}

export default Todo;