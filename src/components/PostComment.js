import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as commentActions from '../actions/commentActions'
import { Button } from 'react-bootstrap'

class PostComment extends Component {

  onCommentDelete = (comment) => {
    const parentId = comment.parentId
    this.props.deleteComment(comment.id, () => {
      this.props.history.push(`/post/${parentId}`)
      this.props.fetchCommentsForPost(comment.parentId)
    })
  }
  render() {
    const { voteComment } = this.props;
    return (
      <div>
        {this.props.comments.map(comment => (
          <div className="comment" key={comment.id}>
            <div>
              <div className='comment-body'>{comment.body}</div>
              <div className="comment-author">by <b>{comment.author}</b></div>
              <div className="comment-votes-section">
                  <div className="comment-votes">{comment.voteScore} <strong>Votes</strong></div>
                  <Button onClick={() => {
                    voteComment(comment.id, comment.parentId, "upVote")
                  }}>Vote up</Button>
                  <Button onClick={() => {
                    voteComment(comment.id, comment.parentId, 'downVote')
                  }}>Vote down</Button>
              </div>
            </div>
            <div className="comment-button-action">
              <Link to={`/${this.props.category}/${comment.parentId}/${comment.id}/edit`}>
                <Button>Edit</Button>
              </Link>
              <Button onClick={() => this.onCommentDelete(comment)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: posts
  }
}

export default connect(mapStateToProps, commentActions)(PostComment)
