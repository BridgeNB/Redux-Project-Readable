import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPosts from './MainPosts'
import NewPost from '../post/components/NewPost'
import "../App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Grid>
            <switch>
              <Route path="/" exact component={MainPosts}/>
              <Route path="/posts/create" exact component={NewPost} />
            </switch>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
