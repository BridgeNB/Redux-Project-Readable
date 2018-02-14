import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/categoryActions'
import MainPosts from './MainPosts';
import NewPost from './NewPost';
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
    return (<BrowserRouter>
      <div>
        <Grid>
          <Switch>
            <Route path="/" exact component={MainPosts}/>
            <Route path="/create" exact component={NewPost}/>
          </Switch>
        </Grid>
      </div>
    </BrowserRouter>);
  }
}

function mapStateToProps({categories, posts}) {
  return {categories: categories, post: posts}
}

export default withRouter(connect(mapStateToProps, actions)(App));
