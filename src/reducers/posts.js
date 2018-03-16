import * as Types from '../actions/types'
import sortBy from "sort-by"

function posts(state = [], action) {
  const { post, postId, editedPost, posts, option } = action
  switch(action.type) {
    case Types.FETCH_POSTS:
      return posts.filter(post => !(post.deleted))
    case Types.ADD_POST:
      return state.concat([post])
    case Types.DELETE_POST:
      return state.filter((post) => post.id !== postId)
    case Types.EDIT_POST:
      return state.map(post => {
        if (post.id === postId) {
          post = editedPost
        }
        return post
      })
    case Types.FETCH_POSTS_BY_CATEGORY:
      return posts.filter(post => !(post.deleted))
    case Types.VOTE_POST:
      return state.map(post => {
        if (post.id === action.postId) {
          if (action.option === "upVote") {
            post.voteScore += 1
          }
          if (action.option === "downVote") {
            post.voteScore -= 1
          }
        }
        return post
      })
    case Types.SORT_POST:
      return [].concat(state.sort(sortBy(option)).reverse())
    default:
      return state
  }
}

export default posts
