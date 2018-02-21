import * as Types from '../actions/types'

function comments(state=[], action) {
  const { comments, commentId, postId, editedComment } = action
  switch(action.type) {
    case Types.ADD_COMMENT:
      return Object.assign({}, state, {[postId]: comments})
    case Types.FETCH_COMMENTS:
      return Object.assign({}, state, {[postId]: comments})
    default:
      return state;
  }
}

export default comments
