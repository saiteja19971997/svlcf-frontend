import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginComponent from './components/LoginComponent.js';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import HomeComponent from './components/HomeComponent.js'
import MemberComponent from './components/MemberComponent.js'
import MemberStaticComponent from './components/MemberStaticComponent.js'
import GroupComponent from './components/GroupComponent.js'
import AboutComponent from './components/AboutComponent.js'
import CreateMemberComponent from './components/CreateMemberComponent';
import CreateGroupComponent from './components/CreateGroupComponent.js';
import SelectExample from './components/SelectExample.js'
const Routing = (
    <Router>
      <div>
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/welcome" component={HomeComponent} />
        <Route excat path="/members" component={MemberStaticComponent} />
        <Route excat path="/groups" component={GroupComponent} />
        <Route excat path="/about" component={AboutComponent} />
        <Route excat path="/createmember" component={CreateMemberComponent} />
        <Route excat path="/creategroup" component={CreateGroupComponent} />
        
      </div>
    </Router>
  )


ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
