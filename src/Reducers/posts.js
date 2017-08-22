const posts = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_POSTS':
            state.all = action.values
            return {
                ...state
            }
        case 'SAVE_CHECKBOX':
            state.checkbox = action.value
            return {
                ...state
            }
        default:
            return state
    }
}

export default posts