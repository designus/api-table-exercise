const initialState = {
  byId: {},
  allUsers: []
}

export const users = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return {
        ...state,
        byId: action.users,
        allUsers: Object.keys(action.users)
      }
    default:
      return state;
  }
};
  