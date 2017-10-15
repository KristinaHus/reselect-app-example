import React, { Component } from 'react'

export default class PostsList extends Component {
  handleClick (post) {
    if (this.props.selectedPosts.indexOf(post.id) >= 0) {
      this.props.removeSelectedPosts(post.id)
    } else {
      this.props.saveSelectedPosts(post.id)
    }
  }
  render () {
    return (
      <div className='posts-list'>
        <h2>All posts</h2>
        {this.props.posts.all.map((post, index) => (
          <label key={index}>
            <input type='checkbox' onClick={(e) => this.handleClick(post)} />
            {post.text}
          </label>
            ))}
      </div>
    )
  }
}
