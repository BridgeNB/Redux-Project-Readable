import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createPost } from '../actions/actions'

class NewPost extends Component {
  renderField(field) {
    const { meta: {touched, error}} = field
    const className = touched && error ? 'error' : null
    return (
      <formGroup>
        <label>{field.label}</label>
        <FormControl
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </formGroup>
    )

  }
  render() {
    return (
      <form>
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
        createPost
    })(NewPost)
);
