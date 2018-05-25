import { createSelector } from 'reselect'

// Just selection logic without  memorization

// export const selectedPosts = state => {
//   return state.posts.all.filter(post => {
//     return state.selectedPosts.findIndex(id => id === post.id) >= 0
//   })
// }

// Reselect with memorization
// First create selector that will be used to calculate data
export const allPosts = state => state.posts.all
export const selectedPostsIds = state => state.selectedPosts

// Then use reselect's createSelector function to memorize the selector
export const selectedPosts = createSelector(
  allPosts, selectedPostsIds,
  (allPosts, selectedPostsIds) => {
    return allPosts.filter(post => {
      return selectedPostsIds.findIndex(id => id === post.id) >= 0
    })
  })
