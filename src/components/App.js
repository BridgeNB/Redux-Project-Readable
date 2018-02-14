import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions'
import MainPosts from './MainPosts';
import NewPost from './NewPost';
import "../App.scss";

class App extends Component {
  static propTypes = {
    categories: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <BrowserRouter>
        <div>
          <Grid>
            <Switch>
              <Route path="/" exact component={MainPosts}/>
              <Route path="/posts/create" exact component={NewPost} />
            </Switch>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
  }
}

export default withRouter(connect(mapStateToProps, {
  fetchCategories
})(App));
