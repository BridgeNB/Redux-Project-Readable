import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCommentsForPost } from '../actions/commentActions'
import { votePost, fetchAllPosts, deletePost } from '../actions/postActions'
import { Button, Well } from 'react-bootstrap'

class SinglePost extends Component {
  componentDidMount() {
    this.props.fetchCommentsForPost(this.props.post.id)
  }
  afterPostDelete = (postId) => {
    const id = this.props.post.id;
    this.props.deletePost(id, () => {});
  }
  render() {
    let { post, votePost, fetchAllPosts } = this.props;
    return (
      <div className="single-post">
        <div className="single-post-detail">
          <Link to={`/${post.category}/${post.id}`}>
            <div className="post-title"><h3>{ post.title }</h3></div>
          </Link>
          <div className="post-body"><Well bsSize="large">{ post.body }</Well></div>
          <div className="post-author">Author: <Button bsStyle="info">{ post.author }</Button></div>
          <div className="post-category">Category: <Button bsStyle="info">{ post.category }</Button></div>
          <div className="post-action-button">
            {console.log('xxxxxx')}
            {console.log(this.props)}
            <Link to={`/${post.category}/${post.id}/edit`}><Button>Edit</Button></Link>
            <Link to={`/${post.category}/${post.id}/comment`}><Button>Comment</Button></Link>
            <Button onClick={(e) => this.afterPostDelete(e)}>Delete</Button>
          </div>
        </div>
        <div className="single-post-bottom">
          <div className="comments-summary">
            <span>{ post.commentCount } <strong>Comments</strong></span>
            <span>{ post.voteScore } <strong>Votes</strong></span>
          </div>
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
export default connect(mapStateToProps, {votePost, fetchAllPosts, fetchCommentsForPost, deletePost})(SinglePost)
