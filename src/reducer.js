const boardReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_NEARBY':
      return // do something
    default:
      return state;
  }
}

export default boardReducer;