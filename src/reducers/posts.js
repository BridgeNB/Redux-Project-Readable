import * as Types from '../actions/types'

function posts(state = [], action) {
  const { post, postId, editedPost } = action
  switch(action.type) {
    case Types.FETCH_POSTS:
      return action.posts.filter(post => !(post.deleted))
    case Types.ADD_POST:
      return state.concat([post])
    case Types.DELETE_POST:
      return state.filter((post) => post.id !== postId)
    case Types.EDIT_POST:
      return state.map(post => {
        if (post.id === postId) {
          post = editedPost
        }
        return post
      })
    default:
      return state
  }
}

export default posts
