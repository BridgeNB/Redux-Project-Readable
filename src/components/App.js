import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import {BrowserRouter, Route, Switch, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/categoryActions';

import CategoryList from './CategoryList';
import NewPost from './NewPost';
import DetailedPost from './DetailedPost';
import EditPost from './EditPost';
import NewComment from './NewComment';
import EditComment from './EditComment';

import "../App.scss";

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
        <div className="filters">
          <div className="category-changer">
            <p>Choose Category</p>
            {categories && categories.map(category => (
              <Link key={category.name} to={`/${category.path}`}>
                <button>{category.name}</button>
              </Link>
            ))}
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
