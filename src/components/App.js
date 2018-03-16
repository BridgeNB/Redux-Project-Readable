import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from 'react-bootstrap';
import { Route, Switch, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/categoryActions';

import CategoryList from './CategoryList';
import NewPost from './NewPost';
import DetailedPost from './DetailedPost';
import EditPost from './EditPost';
import NewComment from './NewComment';
import EditComment from './EditComment';

import "../App.css";

class App extends Component {
  static propTypes = {
    categories: PropTypes.array,
    posts: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const {categories} = this.props
    return (
      <div className="whole-app">
        <div className="app-head">
          <h1>Bridge's Forum</h1>
        </div>
        <div className="category-changer">
          <h2>Choose Posts by Category</h2>
          <div className="category-list">
            {categories && categories.map(category => {
              const { name, path } = category;
              return (
                <Link key={name} to={`/${path}`}>
                  <Button className="category-tag">{name.charAt(0).toUpperCase() + name.slice(1)}</Button>
                </Link>
              )
            })}
          </div>
        </div>

        <div>
          <Grid>
            <Switch>
              <Route path="/" exact component={CategoryList}/>
              <Route path="/create" exact component={NewPost}/>
              <Route path="/:category" exact component={CategoryList}/>
              <Route path="/:category/:postId" exact component={DetailedPost}/>
              <Route path="/:category/:postId/edit" exact component={EditPost}/>
              <Route path="/:category/:postId/comment" exact component={NewComment}/>
              <Route path="/:category/:postId/:commentId/edit" exact component={EditComment}/>
            </Switch>
          </Grid>
        </div>
    </div>
    );
  }
}

function mapStateToProps({categories}) {
  return {categories: categories}
}

export default withRouter(connect(mapStateToProps, actions)(App));
