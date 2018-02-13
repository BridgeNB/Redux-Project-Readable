// import * as utils from '../utils'

const api = "http://localhost:3001"

// Generate a unique token
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

export const addPost = (title, body, author, category) => {
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({title, body, author, category, id: , timestamp: Date.now()})
  }).then(res => res.json())
}
