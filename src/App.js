import React, { Component } from 'react'
import SelectedPosts from './Components/SelectedPosts/SelectedPostsContainer'
import Posts from './Components/Posts/PostsListContainer'
class App extends Component {
  componentWillMount () {
    let posts = require('./posts.json').array
    this.props.savePosts(posts)
  }
  render () {
    return (
      <div>
        <header className='header padding'>
          Test reselect and memorization
        </header>
        <Posts />
        <span className='separator' />
        <SelectedPosts />
      </div>
    )
  }
}

export default App
