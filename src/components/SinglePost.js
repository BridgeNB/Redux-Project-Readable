import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../actions/commentActions'

class SinglePost extends Component {
  componentDidMount() {
    this.props.fetchCommentsForPost(this.props.post.id)
  }
  render() {
    let { post, comments } = this.props;
    return (
      <div className="singlePost">
        <Link to={`/${post.category}/${post.id}`}>
          <div className="postTitle"><h3>{ post.title }</h3></div>
        </Link>
        <div className="postBody">{ post.body }</div>
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
export default connect(mapStateToProps, actions)(SinglePost)
