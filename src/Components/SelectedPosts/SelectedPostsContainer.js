import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import savedPosts from './SelectedPosts'
import { removeSelectedPosts } from '../../Actions'
import { selectedPosts } from "../../Selectors/index"

const mapStateToProps = (state, ownProps) => {
    // let selectedPosts = []
    // state.selectedPosts.forEach(id => {
    //     let post = state.posts.all.find(post => post.id === id)
    //     if (post) {
    //         selectedPosts.push(post)
    //     }
    // })
    // return {
    //     selectedPosts: selectedPosts
    // }


    return {
        selectedPosts: selectedPosts(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({removeSelectedPosts}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(savedPosts)