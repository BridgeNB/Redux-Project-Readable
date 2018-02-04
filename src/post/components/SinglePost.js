import React, { Component } from 'react'

class SinglePost extends Component {
  render() {
      return (
        <div className="singlePost">
          <h3>This is a single Post!</h3>
          <div className="postTitle"><h3>title</h3></div>
          <div className="postBody">post body</div>
          <div className="postAuthor">post author</div>
          <div className="postCategory">post category</div>
        </div>
      );
  }
}

export default SinglePost
