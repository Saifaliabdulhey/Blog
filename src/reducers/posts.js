const postsReducerDefaultState = [];
  
const postsReducer = (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.post];
      case 'EDIT_POST':
        return state.map((post) => {
          if(post.id === action.if) {
            return {
              ...post, 
              ...action.updates
            };
          }else {
            return post;
          }
        })
      case 'REMOVE_POST':
        return state.filter(({ id }) => id !== action.id)
      case 'SET_POSTS':
        return action.posts;
    default:
      return state;
  }
};


export default postsReducer;