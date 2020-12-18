import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch,Route} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './components/App'
import Jokes from './components/Jokes';
import Header from './components/Header';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact={true} path='/' render={()=><Header Component={App}/>}></Route>
            <Route path='/jokes' render={()=><Header Component={Jokes}/>}></Route>
        </Switch>
    </Router>
    ,document.getElementById('root'));