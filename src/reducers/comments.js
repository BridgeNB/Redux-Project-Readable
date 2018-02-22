import * as Types from '../actions/types'

function comments(state=[], action) {
  const { comments, commentId, postId, editedComment } = action
  switch(action.type) {
    case Types.ADD_COMMENT:
      // return state.concat(comments[postId])
      return Object.assign({}, state, {[postId]: comments})
    case Types.FETCH_COMMENTS:
      return Object.assign({}, state, {[postId]: comments})
      // let newState = { ...initialState }
      // if (action.comments.length > 0) {
      //  const key = action.comments[0].parentId
      //  newState[key] = action.comments
      // } else {
      //  newState[action.postId] = []
      // }
      // return newState;
    default:
      return state;
  }
}

export default comments
