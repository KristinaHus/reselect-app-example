import React, { Component } from 'react'
import SelectedPosts from './Components/SelectedPosts/SelectedPostsContainer'
import Posts from './Components/Posts/PostsListContainer'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: false
    }
  }
  componentWillMount () {
    let posts = require('./posts.json').array
    this.props.savePosts(posts)
  }
  handleChange () {
    this.setState((prevState, prop) => {
      return {selected: !prevState.selected}
    }, () => {
      this.props.saveCheckbox(this.state.selected)
    })
  }
  render () {
    return (
      <div>
        <SelectedPosts />
        <Posts />
        <h4>Other data</h4>
        <input type='checkbox' onClick={() => this.handleChange()} />
      </div>
    )
  }
}

export default App
