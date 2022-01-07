export default (posts= [], action) => {
    switch (action.type) {
        case 'DELETE':  
            return posts.filter((post) => post.id !== action.payload);
        case 'UPDATE':
            return posts.map((post) => post.id === action.payload.id ? action.payload : post);
        case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'SEARCH':
            return posts.filter((post) => post.title.toLowerCase().includes(action.payload));
        case 'CREATE':
            return [...action.payload];
        default:
            return posts;
    }
}