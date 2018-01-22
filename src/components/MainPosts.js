import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'

class MainPosts extends Component {
  render() {
    return (
      <Row>
        <Col md={2}>
          <h3>Categories</h3>
        </Col>
        <Col md={10}>
          <h1>Main Posts</h1>
          <Button>Create Post</Button>
        </Col>
      </Row>
    )
  }
}

export default MainPosts
