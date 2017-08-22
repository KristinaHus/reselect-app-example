import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Posts from './PostsList'
import { saveSelectedPosts, removeSelectedPosts } from '../../Actions'

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts,
        selectedPosts: state.selectedPosts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({saveSelectedPosts, removeSelectedPosts}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)