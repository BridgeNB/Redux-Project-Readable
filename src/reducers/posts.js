import * as Types from '../actions/types'

function posts(state = [], action) {
  const { post, postId } = action
  switch(action.type) {
    case Types.FETCH_POSTS:
      return action.posts.filter(post => !(post.deleted))
    case Types.ADD_POST:
      return state.concat([post])
    case Types.DELETE_POST:
      return state.filter((post) => post.id !== postId)
    default:
      return state
  }
}

export default posts
