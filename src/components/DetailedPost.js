import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions/postActions'

import _ from 'lodash'

class DetailedPost extends Component {
  afterPostDelete = () => {
    const id = this.props.match.params.postId
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    })
  }
  render() {
      const { post } = this.props
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
        </div>
      )
  }
}

function mapStateToProps({ posts }, { match }) {
  const post = _.find(posts, {id: match.params.postId});
  return {
    post: post
  }
}

export default connect(mapStateToProps, { deletePost })(DetailedPost)
