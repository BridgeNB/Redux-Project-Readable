import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { addPost } from '../actions/postActions'
import { guid } from '../api/util'

class NewPost extends Component {

  createNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: guid(),
      timestamp: Date.now(),
      title: e.target.title.value,
      body: e.target.body.value,
      author: e.target.author.value,
      category: e.target.category.value,
    }

    this.props.addPost(newPost, () => this.props.history.push('/'))
  }

  render() {
    const { categories } = this.props.posts;
    const categoryList = [];
    for (let i = 0; i < categories.length; i++) {
      categoryList.push({value: categories[i].name, label: categories[i].name})
    }

    return (<form onSubmit={this.createNewPost}>
      <h2>New Post</h2>
      <ul className="form-style-1">
        <li>
          <label>Name
            <span className="required">*</span>
          </label>
          <input type="text" name="author" className="field-long"/>
        </li>
        <li>
          <label>Title
            <span className="required">*</span>
          </label>
          <input type="text" name="title" className="field-long"/>
        </li>
        <li>
          <label>Category
          </label>
          <select name="category" className="field-select">
            {categories && categories.map((category) => (<option key={category.name} value={category.name}>{category.name}</option>))}
          </select>
        </li>
        <li>
          <label>Post
            <span className="required">*</span>
          </label>
          <textarea name="body" id="field5" className="field-long field-textarea"></textarea>
        </li>
      </ul>
      <Button type="submit" bsStyle="primary">Submit</Button>
      <Link to="/" className="btn btn-danger"><Button>Cancel</Button></Link>
    </form>)
  }
}

function mapStateToProps(posts, categories) {
  return {posts: posts, categories: categories}
}

export default connect(mapStateToProps, { addPost })(NewPost);
