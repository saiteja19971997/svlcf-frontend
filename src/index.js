import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginComponent from './components/LoginComponent.js';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomeComponent from './components/HomeComponent.js'
import MemberComponent from './components/MemberComponent.js'
import GroupComponent from './components/GroupComponent.js'
import AboutComponent from './components/AboutComponent.js'
const Routing = (
    <Router>
      <div>
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/welcome" component={HomeComponent} />
        <Route excat path="/members" component={MemberComponent} />
        <Route excat path="/groups" component={GroupComponent} />
        <Route excat path="/about" component={AboutComponent} />
      </div>
    </Router>
  )


ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
