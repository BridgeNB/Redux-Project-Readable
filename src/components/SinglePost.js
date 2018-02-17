import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as actions from '../actions/postActions'

class SinglePost extends Component {
  render() {
    let { post } = this.props;
    return (
      <div className="singlePost">
        <Link to={`/${post.category}/${post.id}`}>
          <div className="postTitle"><h3>{ post.title }</h3></div>
        </Link>
        <div className="postBody">{ post.body }</div>
        <div className="postAuthor">{ post.author }</div>
        <div className="postCategory">{ post.category }</div>
      </div>
    );
  }
}

export default SinglePost
