import React, { Component } from 'react'

export default class SelectedPostsList extends Component {
    componentWillReceiveProps (nextProps) {
        console.log(1111111, nextProps.selectedPosts)
    }
    render () {
        return (
            <div className='posts-list'>
                <h2>Selected posts</h2>
                {this.props.selectedPosts && this.props.selectedPosts.map((post, index) => (
                    <p key={index}>{post.text}</p>
                ))}
            </div>
        )
    }
}