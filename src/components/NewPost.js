import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'
import { guid } from '../api/util'

class NewPost extends Component {
  createNewPost = (e) => {
    e.preventDefault()

    const title = e.target.title.value;
    const body = e.target.body.value;
    const author = e.target.author.value;
    const category = e.target.category.value;

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
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }
  render() {
    return (
      <form onSubmit={this.createNewPost}>
        <Field
          label="Title:"
          name="title"
          component={this.renderField}
        />
        <Field
          label='Content:'
          name='body'
          component={this.renderField}
        />
        <Field
          label='Author:'
          name='author'
          component={this.renderField}
        />
        <Button type="submit" bsStyle="primary">Submit</Button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!"
    }

    if (!values.author) {
        errors.author = "Enter a name!"
    }

    if (!values.body) {
        errors.body = "Enter some content!"
    }

    if (!values.category) {
        errors.category = "Select some content!"
    }

    return errors;
}

function mapStateToProps(state) {
  return {};
}

export default reduxForm({
    validate,
    form: 'CreatePostForm'
})(
    connect(mapStateToProps, {
    })(NewPost)
);
