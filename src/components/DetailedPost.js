import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash'

import { deletePost } from '../actions/postActions'
import { fetchCommentsForPost } from '../actions/commentActions'
import { fetchAllPosts } from '../actions/postActions'

import PostComment from './PostComment'

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
      const { post, comments } = this.props
      if (!post) {
        return <div>404 not found</div>
      }
      return (
        <div>
          <div className='post' key='post-id'>
            <div className='post-detail'>
              <div className='post-title'>{post.title}</div>
              <div className='post-body'>{post.body}</div>
              <div className='post-author'>{post.author}</div>
            </div>
          </div>
          <div className='post-detail-buttons'>
            <Link to={`/${post.category}/${post.id}/edit`}>Edit</Link>
            <Link to={`/${post.category}/${post.id}/comment`}>Comment</Link>
            <button onClick={(e) => this.afterPostDelete(e)}>Delete</button>
          </div>
          {post && comments && <PostComment category={post.category} comments={comments} history={this.props.history}/>}
          <Link to="/" className="btn home">Back to Home</Link>
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

export default connect(mapStateToProps, { deletePost, fetchCommentsForPost, fetchAllPosts })(DetailedPost)
