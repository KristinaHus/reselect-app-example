import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from './App'
import { savePosts, saveCheckbox } from './Actions'

const mapStateToProps = (state, ownProps) => {
  window.store = state
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({savePosts, saveCheckbox}, dispatch)
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
