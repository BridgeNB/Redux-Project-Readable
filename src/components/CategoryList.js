import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import SinglePost from './SinglePost'
import * as actions from '../actions/postActions'

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
        <div className="post-list">
          <h2> This is post list </h2>
          {posts.map((post) => (
            <SinglePost post={post} key={post.id} />
          ))}
          <div className="post-list-bottom">
            <Link to="/create" className="btn btn-danger"><Button>Create post</Button></Link>
            <Link to="/" className="btn home"><Button>Back to Home</Button></Link>
          </div>
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
