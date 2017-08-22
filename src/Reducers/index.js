import { combineReducers } from 'redux'
import posts from './posts'
import selectedPosts from './selectedPosts'

export default combineReducers({posts, selectedPosts})

