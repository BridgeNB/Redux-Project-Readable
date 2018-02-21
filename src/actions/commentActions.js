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
    API.addComment(comment).then(comment => {
      dispatch({ type: Types.ADD_COMMENT, postId, comment})
    }).then(() => callback())
  }
}
