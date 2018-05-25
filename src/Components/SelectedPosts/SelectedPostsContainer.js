import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import savedPosts from './SelectedPosts'
import { removeSelectedPosts } from '../../Actions'

const mapStateToProps = (state) => {
  let selectedPosts = state.posts.all.filter(post => {
    return state.selectedPosts.findIndex(id => id === post.id) >= 0
  })
  return {
    selectedPosts: selectedPosts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({removeSelectedPosts}, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(savedPosts)
