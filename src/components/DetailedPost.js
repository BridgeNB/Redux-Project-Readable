import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import _ from 'lodash';

import { fetchCommentsForPost } from '../actions/commentActions';
import { votePost, fetchAllPosts, deletePost } from '../actions/postActions';

import PostComment from './PostComment';

class DetailedPost extends Component {
  componentDidMount() {
    this.props.fetchAllPosts()
    this.props.fetchCommentsForPost(this.props.match.params.postId)
  }

  afterPostDelete = () => {
    const id = this.props.match.params.postId
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }

  render() {
      const { post, comments, votePost, fetchAllPosts } = this.props
      if (!post) {
        return <div>404 not found</div>
      }
      return (
        <div>
          <div className='post' key='post-id'>
            <div className='post-detail'>
              <div className='post-title'>{post.title}</div>
              <div className='post-body'>{post.body}</div>
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
              <div className="post-likes-comments">
                {post.voteScore} votes {comments && comments ? comments.length : 0} comments
              </div>
              <div className='post-author'>{post.author}</div>
            </div>
          </div>
          <div className='post-detail-buttons'>
            <Link to={`/${post.category}/${post.id}/edit`}><Button>Edit</Button></Link>
            <Link to={`/${post.category}/${post.id}/comment`}><Button>Comment</Button></Link>
            <Button onClick={(e) => this.afterPostDelete(e)}>Delete</Button>
          </div>
          {post && comments && <PostComment category={post.category} comments={comments} history={this.props.history}/>}
          <Link to="/" className="btn home"><Button>Back to Home</Button></Link>
        </div>
      )
  }
}

function mapStateToProps({ posts, comments }, { match }) {
  const post = _.find(posts, {id: match.params.postId});
  return {
    post: post,
    comments: comments[match.params.postId]
  }
}

export default connect(mapStateToProps, { deletePost, votePost, fetchCommentsForPost, fetchAllPosts })(DetailedPost)
