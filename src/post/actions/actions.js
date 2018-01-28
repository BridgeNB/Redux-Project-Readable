import axios from 'axios';
import {
  CREATE_POST,
} from './types';
import {
  ROOT_URL,
  AUTH_HEADERS,
  guid
} from '../../utils/constants'

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

export function createPost(values, callback) {
  const {title, body, author, category } = values;
  const data = {
    id: guid(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category
  }
  return dispatch => {
    axios.post(`${ROOT_URL}/posts`, data)
      .then(res => {
        callback();
        dispatch(createPostSuccess(res.data));
      });
  }
}

function createPostSuccess(data) {
  return {
    type: CREATE_POST,
    payload: data
  };
}
