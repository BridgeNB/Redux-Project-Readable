import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as commentActions from '../actions/commentActions'

import _ from 'lodash'

class EditComment extends Component {
  componentDidMount() {
    this.props.fetchCommentsForPost(this.props.match.params.postId)
  }
  edit = (e) => {
    e.preventDefault()
    const commentId = this.props.comment.id
    const postId = this.props.comment.parentId
    const timestamp = Date.now()
    const body = e.target.body.value

    this.props.editComment(commentId, postId, timestamp, body,
        () => this.props.history.push(`/post/${this.props.comment.parentId}`))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.edit}>
          <h2>Edit Comment</h2>
          <ul className="form-style-1">
            <li>
              <label>Comment <span className="required">*</span></label>
              <textarea defaultValue={this.props.comment.body} name="body" id="field5" className="field-long field-textarea"></textarea>
            </li>
            <button>Update</button>
            <Link to={`/post/${this.props.comment.parentId}`}>
              <button>Cancel</button>
            </Link>
          </ul>
        </form>
      </div>
    )
  }
}

function mapStateToProps({posts, comments}, {match}) {
  return {
    comment: _.find(comments[match.params.postId], {id: match.params.commentId})
  }
}

export default connect(mapStateToProps, commentActions)(EditComment)
