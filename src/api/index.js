export const API = 'http://localhost:3001'
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

export const headers = {
  'Accept': 'application/json',
  'Authorization': token,
  'Content-Type': 'application/json'
}

/******* posts function *********/

export const fetchPosts = () => {
  return fetch(`${API}/posts`, {headers}).then(res => res.json())
}

export const addPost = (post) => {
  return fetch(`${API}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(post)
  })
}

export const deletePost = (postId) => {
  return fetch(`${API}/posts/${postId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())
}

export const editPost = (postId, title, body) => {
  return fetch(`${API}/posts/${postId}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({title: title, body: body})
  }).then(res => res.json())
}

export const fetchPostsByCategory = (category) => {
  return fetch(`${API}/${category}/posts`, {headers}).then(res => res.json())
}

export const votePost = (postId, option) => {
  return fetch(`${API}/posts/${postId}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({option})
  }).then(res => res.json())
}

/****** category function ********/

export const fetchCategories = () => {
  return fetch(`${API}/categories`, {headers}).then(res => res.json())
}

/******* comment function ********/

export const fetchComment = (postId) => {
  return fetch(`${API}/posts/${postId}/comments`, { headers }).then(res => res.json())
}

export const deleteComment = (commentId) => {
  return fetch(`${API}/comments/${commentId}`, {
    method: 'DELETE',
    headers: headers
  }).then(res => res.json())
}

export const editComment = (commentId, timestamp, body) => {
    return fetch(`${API}/comments/${commentId}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ timestamp: timestamp, body: body})
    }).then(res => res.json())
}

export const addComment = (comment) => {
  return fetch(`${API}/comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(comment)
  }).then(res => res.json())
}

export const voteComment = (commentId, option) => {
  return fetch(`${API}/comments/${commentId}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({option})
  }).then(res => res.json())
}
