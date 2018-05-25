
// Just selection logic without  memorization

export const selectedPosts = state => {
  return state.posts.all.filter(post => {
    return state.selectedPosts.findIndex(id => id === post.id) >= 0
  })
}
