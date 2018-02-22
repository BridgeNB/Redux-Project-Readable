import * as API from '../api/index';
import * as Types from './types';

export const fetchCommentsForPost = (postId) => {
  return (dispatch) => {
    API.fetchComment(postId).then(comments => {
      dispatch({type: Types.FETCH_COMMENTS, postId, comments})
    })
  }
}

export const addComment = (comment, postId, callback) => {
  return (dispatch) => {
    API.addComment(comment).then(() => callback())
    dispatch({ type: Types.ADD_COMMENT, postId, comment})
  }
}

export const deleteComment = (commentId, callback) => {
  return (dispatch) => {
    API.deleteComment(commentId).then(() => callback())
    dispatch({ type: Types.DELETE_COMMENT, commentId})
  }
}
