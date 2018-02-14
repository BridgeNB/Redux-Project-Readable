import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroupItem, FieldGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'
import * as actions from '../actions/postActions'

import SinglePost from './SinglePost'

class CategoryList extends Component {

  static propTypes = {
    posts: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchAllPosts()
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="postsList">
          <h3> This is post list </h3>
          { posts.map((post) => (<SinglePost state={post} key={post.id}/>))}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: posts
  }
}

export default connect(mapStateToProps, actions)(CategoryList);
