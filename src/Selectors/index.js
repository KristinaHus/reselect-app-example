import { createSelector } from 'reselect'


// reselect with memorization
// First create selector that will be used to calculate data
export const allPosts = state => state.posts.all
export const selectedPostsIds = (state, props) => state.selectedPosts
const category = (state, props) => props.category

// createSelector function for multiple components
// export const selectedPosts = createSelector(
//     allPosts, selectedPostsIds, category,
//     (allPosts, selectedPostsIds, category) => {
//       return allPosts.filter(post => {
//         return selectedPostsIds.findIndex(id => id === post.id && category === post.category) >= 0
//       })
//     })

// createSelector valid function for multiple components
export const makeSelectedPosts = () => {
  return createSelector(
    allPosts, selectedPostsIds, category,
    (allPosts, selectedPostsIds, category) => {
      return allPosts.filter(post => {
        return selectedPostsIds.findIndex(id => id === post.id && category === post.category) >= 0
      })
    })
}
