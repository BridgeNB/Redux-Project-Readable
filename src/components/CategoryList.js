import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../actions/postActions'
import { Link } from 'react-router-dom'

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
          <Link to="/create" className="btn btn-danger">Create post</Link>
          { posts.map((post) => (
            <SinglePost post={post} key={post.id} />
          ))}
          <Link to="/" className="btn home">Back to Home</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts, categories }, { match }) {
  const category = match.params.category
  return {
    posts: category ? posts.filter(post => post.category === category) : posts
  }
}

export default connect(mapStateToProps, actions)(CategoryList);
