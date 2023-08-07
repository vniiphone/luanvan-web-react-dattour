
const initState = {
  users: [
    {id: 1, name: 'quocvu'},
    {id: 2, name: 'vuky'},
    {id: 3, name: 'quocan'}
  ],
  posts: []
}

//state là react: lưu trữ state của REACT
//action 
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      let users = state.users;
      users = users.filter(user => user.id !== action.payload.id);
      return {
        ...state, users
      };

    case 'CREATE_USER':
      let id = Math.floor(Math.random() * 1001);
      let user = {id: id, name: `random ${id}`}
      return {
        ...state, users: [...state.users, user]

      };


    default:
      return state;
  }

}


export default rootReducer;