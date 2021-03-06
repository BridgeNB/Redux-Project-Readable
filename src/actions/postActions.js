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
    API.addPost(post).then(() => callback())
    dispatch({ type: Types.ADD_POST, post})
  }
}

export const deletePost = (postId, callback) => {
  return (dispatch) => {
    API.deletePost(postId).then(() => callback())
    dispatch({ type: Types.DELETE_POST, postId})
  }
}

export const editPost = (postId, title, body, callback) => {
  return (dispatch) => {
    API.editPost(postId, title, body).then(editedPost => {
      dispatch({ type: Types.EDIT_POST, editedPost, postId })
    }).then(() => callback())
  }
}

export const fetchPostsByCategory = (category) => {
  return (dispatch) => {
    API.fetchPostsByCategory(category).then(posts => {
      dispatch({ type: Types.FETCH_POSTS_BY_CATEGORY, posts})
    })
  }
}

export const votePost = (postId, option) => {
  return (dispatch) => {
    API.votePost(postId, option).then( post => {
      dispatch({ type: Types.VOTE_POST, postId, option})
    })
  }
}

export const sortPost = (option) => {
  return (dispatch) => {
    dispatch({ type: Types.SORT_POST, option})
  }
}
