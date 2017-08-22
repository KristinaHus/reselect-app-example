import { createSelector } from 'reselect'


// export const selectedPosts = state => {
//     let selectedPosts = []
//     state.selectedPosts.forEach(id => {
//         let post = state.posts.all.find(post => post.id === id)
//         if (post) {
//             selectedPosts.push(post)
//         }
//     })
//     return selectedPosts
// }

export const allPosts = state => state.posts.all

export const selectedPostsIds = state => state.selectedPosts

export const selectedPosts = createSelector(
    allPosts, selectedPostsIds,
    (allPosts, selectedPostsIds) => {
    let selectedPosts = []
    selectedPostsIds.forEach(id => {
        let post = allPosts.find(post => post.id === id)
        if (post) {
            selectedPosts.push(post)
        }
    })
    return selectedPosts
})
