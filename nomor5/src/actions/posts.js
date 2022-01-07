import * as api from "../api";
import response from "./response.json"

export const getPosts = () => async (dispatch) => {
    try {
        const dataResponse = response

        dispatch({ type: 'FETCH_ALL', payload: dataResponse });

    } catch (error) {
        console.log(error)
    }

}

