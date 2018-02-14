import * as API from '../api/index';
import * as Types from './types';

export const fetchAllPosts = () => {
  return (dispatch) => {
    API.fetchPosts().then(posts => {
      dispatch({ type: Types.FETCH_POSTS, posts })
    })
  }
}

export const addPost = (post, callback) => {
  return (dispatch) => {
    API.addPost(post).then(()=>callback())
    dispatch({ type: Types.ADD_POST, post})
  }
}