import * as Types from '../actions/types'

function posts(state = [], action) {
  const {posts, post} = action
  switch(action.type) {
    case Types.FETCH_POSTS:
      return action.posts.filter(post => !(post.deleted))
    case Types.ADD_POST:
      return state.concat([post])
    default:
      return state
  }
}

export default posts
