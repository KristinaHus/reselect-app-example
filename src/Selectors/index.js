import { createSelector } from 'reselect'

// Reselect with memorization
// First create selector that will be used to calculate data
export const allPosts = state => state.posts.all
export const selectedPostsIds = state => state.selectedPosts
const category = (state, props) => props.category

// Then use reselect's createSelector function to memorize the selector
// export const selectedPosts = createSelector(
//   allPosts, selectedPostsIds,
//   (allPosts, selectedPostsIds) => {
//     return allPosts.filter(post => {
//       return selectedPostsIds.findIndex(id => id === post.id) >= 0
//     })
//   })

// createSelector function for multiple components
export const selectedPosts = createSelector(
  allPosts, selectedPostsIds, category,
  (allPosts, selectedPostsIds, category) => {
    let selectedPosts = []
    selectedPostsIds.forEach(id => {
      let post = allPosts.filter(post => post.category === category).find(post => post.id === id)
      if (post) {
        selectedPosts.push(post)
      }
    })
    return selectedPosts
  }
)
