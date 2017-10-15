export const savePosts = (values) => {
  return {
    type: 'ADD_POSTS',
    values
  }
}
export const saveSelectedPosts = (id) => {
  return {
    type: 'SAVE_SELECTED_POST',
    id
  }
}
export const removeSelectedPosts = (id) => {
  return {
    type: 'REMOVE_SELECTED_POST',
    id
  }
}

export const saveCheckbox = (value) => {
  return {
    type: 'SAVE_CHECKBOX',
    value
  }
}
