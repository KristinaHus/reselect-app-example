import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import savedPosts from './SelectedPosts'
import { removeSelectedPosts } from '../../Actions'
// import { selectedPosts } from '../../Selectors/index'
import { makeSelectedPosts } from '../../Selectors/index'

// const mapStateToProps = (state, ownProps) => {
  // return {
    // selectedPosts: selectedPosts(state, ownProps)
  // }
// }

const makeMapStateToProps = () => {
  const selectedPosts = makeSelectedPosts()
  const mapStateToProps = (state, ownProps) => {
    return {
      selectedPosts: selectedPosts(state, ownProps)
    }
  }
  return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({removeSelectedPosts}, dispatch)
  }
}

export default connect(
  makeMapStateToProps,
  // mapStateToProps,
  mapDispatchToProps
)(savedPosts)
