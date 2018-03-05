import * as Types from '../actions/types'

function comments(state=[], action) {
  const { comments, commentId, postId, editedComment } = action
  switch(action.type) {
    case Types.ADD_COMMENT:
      return Object.assign({}, state, {[postId]: comments})
    case Types.FETCH_COMMENTS:
      let newState = { ...state }
      if (action.comments.length > 0) {
       const key = action.comments[0].parentId
       newState[key] = action.comments
      } else {
       newState[action.postId] = []
      }
      return newState;
    case Types.EDIT_COMMENT:
      return {
        ...state,
        [postId]: state[postId].map(comment => {
          if(comment.id === commentId) {
            comment = editedComment
          }
          return comment
        })
      }
    default:
      return state;
  }
}

export default comments
