import * as Types from '../actions/types'

function posts(state = [], action) {
  const { post, postId, editedPost, posts } = action
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
    default:
      return state
  }
}

export default posts
