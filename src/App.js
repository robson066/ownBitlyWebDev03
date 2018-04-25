import Loadable from 'react-loadable';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import '../node_modules/material-icons/iconfont/material-icons.css';

const Loading = () => <div>Loading...</div>;

const LinksPage = Loadable({
  loader: () => import('./containers/links'),
  loading: Loading
});

const EditFormPage = Loadable({
  loader: () => import('./containers/editForm'),
  loading: Loading
});

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={LinksPage}/>
            <Route path="/edit/:id" component={EditFormPage}/>
            <Route path="/add" component={EditFormPage}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
