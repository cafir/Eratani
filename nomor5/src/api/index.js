import axios from 'axios'

const url = 'https://api.eratani.co.id/getAboutFarmer';

export const fetchPosts = (newPost) => axios.post(url, newPost);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)