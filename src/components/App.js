import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPosts from './MainPosts'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Grid>
            <switch>
              <Route path="/" exact component={MainPosts}/>
            </switch>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
