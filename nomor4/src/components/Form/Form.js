import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";    
import { updatePost, createPost } from "../../action/posts";


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: "", description: "", createdAt: moment(new Date()).format("YYYY-MM-DD HH:mm")
    })

    const post = useSelector((state) => currentId ? state.posts.find((p) => p.id === currentId) : null);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (post) {
            setPostData(post)
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData))
            clear();
        } else {
            dispatch(createPost(postData))
            clear();
        }
        
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({ title: "", description: "", createdAt: moment(new Date()).format("YYYY-MM-DD HH:mm") })
    }
    console.log(post)

    return (
        <form class="card card-form" onSubmit={handleSubmit}>
            <div class="input-group" >
              <h3>{currentId ? 'Editing' : 'Creating'}</h3>
                <label>Title</label>
                <input name="title" type="text" value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            </div>
            <div class="input-group">
                <label>Description</label>
                <textarea name="title" type="text" value={postData.description}
                onChange={(e) => setPostData({ ...postData, description: e.target.value })}></textarea>
            </div>
            <div class="card-footer">
                <button class="btn">Submit</button>
            </div>
            
        </form>
    )
}

export default Form;