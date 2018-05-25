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
        <header className='header padding'>
          Test reselect and memorization
        </header>
        {true &&
          <div className='padding'>
            <h2>Other data</h2>
            <input type='checkbox' onClick={() => this.handleChange()} />
          </div>
        }
        <Posts />
        <span className='separator' />
        {/*<SelectedPosts />*/}
        {true && <div>
          <SelectedPosts category='one' />
          <SelectedPosts category='two' />
          <SelectedPosts category='three' />
        </div>}
      </div>
    )
  }
}

export default App
