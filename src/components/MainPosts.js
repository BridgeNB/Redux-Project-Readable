import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import CategoreList from '../category/components/CategoryList'

class MainPosts extends Component {
  render() {
    return (
      <Row>
        <Col md={2}>
          <h3>Categories</h3>
        </Col>
        <Col md={10}>
          <h1>Main Posts</h1>
          <Link to="/posts/create" className="btn btn-danger">Create post</Link>
          <CategoreList />
        </Col>
      </Row>
    )
  }
}

export default MainPosts
