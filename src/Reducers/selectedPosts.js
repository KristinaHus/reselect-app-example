const selectedPosts = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_SELECTED_POST':
      state.push(action.id)
      return [
        ...state
      ]
    case 'REMOVE_SELECTED_POST':
      state.splice(state.indexOf(action.id), 1)
      return [
        ...state
      ]
    default:
      return state
  }
}

export default selectedPosts
