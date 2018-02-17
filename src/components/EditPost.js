import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editPost, fetchAllPosts } from '../actions/postActions';

import _ from 'lodash';

class EditPost extends Component {
  componentDidMount() {
    this.props.fetchAllPosts()
  }
  edit = (e) => {
    e.preventDefault()
    const postId = this.props.post.id
    const title = e.target.title.value
    const body = e.target.body.value

    this.props.editPost(postId, title, body, () => this.props.history.push('/'))
  }

  render() {
    const { post } = this.props

    return (
      <div>
        <form onSubmit={this.edit}>
          <h2>Edit Post</h2>
          <ul className="form-style-1">
            <li>
              <label>Title <span className="required">*</span></label>
              <input defaultValue={post.title} type="text" name="title" className="field-long" />
            </li>
            <li>
              <label>Post <span className="required">*</span></label>
              <textarea defaultValue={post.body} name="body" id="field5" className="field-long field-textarea"></textarea>
            </li>
            <button>Update</button>
            <Link to={`/post/${post.id}`}>
              <button>Cancel</button>
            </Link>
          </ul>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ posts }, { match }) {
  const post = _.find(posts, {id: match.params.postId});
  console.log(post);
  return {
    post: post
  }
}

export default connect(mapStateToProps, { editPost, fetchAllPosts })(EditPost);
