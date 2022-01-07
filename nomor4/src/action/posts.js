import data from "./MOCK_DATA (2).json"

let temp = []
export const getPost = () => async (dispatch) => {
    try {
        
        if (temp.length === 0) {
            // const { data } = await api.fetchData();
            temp = data
        }
        

        dispatch({ type: "FETCH_ALL", payload: temp });
    } catch (error) {
        console.log(error.message)        
    }
}

export const createPost = (postData) => async (dispatch) => {
    try {
        temp.push({...postData, id: temp.length + 1})
        dispatch({ type: "CREATE", payload: temp });
    } catch (error) {
        
    }
}

export const updatePost = (id, postData) => async (dispatch) => {
    try {
        const tempById = temp.find((t) => t.id === id);
        temp[temp.indexOf(tempById)] = postData
        console.log(tempById)
        dispatch({ type: "UPDATE", payload: postData })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        temp =  temp.filter((t) => t.id !== id)
        dispatch({ type: "DELETE", payload: id})
    } catch (error) {
        console.log(error)
    }
}

export const getPostBySearch = (titleSearch) => async (dispatch) => {
    try {
        temp = temp.filter((t) => t.title.toLowerCase().includes(titleSearch.toLowerCase()))
        console.log(temp)
        dispatch({ type: "SEARCH", payload: titleSearch.toLowerCase()})
    } catch (error) {
        console.log(error)
    }
}
