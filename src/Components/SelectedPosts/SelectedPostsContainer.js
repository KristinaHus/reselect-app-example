import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import savedPosts from './SelectedPosts'
import { removeSelectedPosts } from '../../Actions'
import { selectedPosts } from '../../Selectors/index'

const mapStateToProps = (state, ownProps) => {
  return {
    // selectedPosts: selectedPosts(state)
    selectedPosts: selectedPosts(state, ownProps)
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
