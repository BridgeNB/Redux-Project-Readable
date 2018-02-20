import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewComment extends Component {
  render() {
    return (
      <form>
        <ul className='comment-form'>
          <li>
            <label>Name <span className="required">*</span></label>
          </li>

        </ul>
      </form>
    )
  }
}

export default NewComment;
