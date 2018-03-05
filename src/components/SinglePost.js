import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCommentsForPost } from '../actions/commentActions'
import { votePost, fetchAllPosts } from '../actions/postActions'
import { Button } from 'react-bootstrap'

class SinglePost extends Component {
  componentDidMount() {
    this.props.fetchCommentsForPost(this.props.post.id)
  }
  render() {
    let { post, votePost, fetchAllPosts } = this.props;
    return (
      <div className="singlePost">

        <Link to={`/${post.category}/${post.id}`}>
          <div className="postTitle"><h3>{ post.title }</h3></div>
        </Link>
        <div className="postBody">{ post.body }</div>

        <div className="post-votes">
          <Button onClick={() => {
            votePost(post.id, "upVote")
            fetchAllPosts()
          }}>Vote up</Button>
          <Button onClick={() => {
            votePost(post.id, "downVote")
            fetchAllPosts()
          }}>Vote down</Button>
        </div>

        <div className="postAuthor">{ post.author }</div>
        <div className="postCategory">{ post.category }</div>
        <div className="comments-summary">
          { post.commentCount } Comments
          { post.voteScore } Votes
        </div>
      </div>
    );
  }
}
function mapStateToProps({ comments }, { post }) {
  return {
    comments: comments[post.id]
  }
}
export default connect(mapStateToProps, {votePost, fetchAllPosts, fetchCommentsForPost})(SinglePost)
