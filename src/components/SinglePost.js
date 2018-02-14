import React, { Component } from 'react'

class SinglePost extends Component {
  render() {
    let { state } = this.props;
    /************** mock state & actions *********/
    // let mockState = {
    //   id: 0,
    //   title: "Udacity is the best place to learn react",
    //   body: "This is the body",
    //   author: "Yangqiao Zheng",
    //   category: "React"
    // }
    // let mockAction = {
    //   showPost: id => console.log('ShowPost', id)
    // }
    // state = mockState
    // actions = mockAction
    /********** end mock state and action ******/
    return (
      <div className="singlePost">
        <div className="postTitle"><h3>{ state.title }</h3></div>
        <div className="postId">{ state.id }</div>
        <div className="postBody">{ state.body }</div>
        <div className="postAuthor">{ state.author }</div>
        <div className="postCategory">{ state.category }</div>
      </div>
    );
  }
}

export default SinglePost
