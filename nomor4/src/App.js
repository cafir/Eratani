import React, { useState, useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Todos from "./components/Posts/Posts";
import { getPost, getPostBySearch } from "./action/posts";
import Form from "./components/Form/Form";


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch()

    const searchPost = () => {
        dispatch(getPostBySearch(search))
    }
    
    console.log(search)
    

    if (searchPost() === undefined) {
        dispatch(getPost())
    } 

    return (
        <div class="card-row">
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <form>
                <p>Search Here</p>
                <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </form>
            <Todos setCurrentId={setCurrentId}/>
        </div>
    )
}

export default App;