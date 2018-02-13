import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroupItem, FieldGroup } from 'react-bootstrap'
import SinglePost from '../../post/components/SinglePost'
// import { fetchCategories, fetchCategoryPosts, fetchPosts } from '../../actions/actions'

class CategoryList extends Component {
  render() {
    let { state } = this.props;
    /********start test*******/
    let mockState = {
      newPostId: 2,
      posts: [
        {
          id: 0,
          title: "Udacity is the best place to learn react",
          body: "This is the body",
          author: "Yangqiao Zheng",
          category: "React"
        },
        {
          id: 1,
          title: "Bridge is the Best",
          body: "This is the bridge body",
          author: "Bridge NB",
          category: "Redux"
        }
      ]
    };
    state = mockState;
    /********* end test ********/
    return (
      <div>
        <ListGroupItem>
          <h1>This is category</h1>
        </ListGroupItem>
        <div className="postsList">
          <h3> This is post list </h3>
          { state.posts.map((post) => <SinglePost state={post} key={post.id}/>)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(CategoryList);
