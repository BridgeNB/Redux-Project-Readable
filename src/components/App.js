import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPosts from './MainPosts'
import NewPost from './NewPost'
import "../App.scss";

class App extends Component {
  render() {
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

export default App;
