import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import AddPostPage from './AddPostPage';
import Home from './Home';
import createHistory from 'history/createBrowserHistory';
import EditPostPage from './EditPostPage';
import LoginPage from './LoginPage';
import Header from './Header';
import Read from './Read'

export const history = createHistory();

function AppRouter() {
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/home" exact component={Home} />
                <Route path="/read/:id" exact component={Read} />
                <Route path="/edit/:id" component={EditPostPage} />
                <Route path="/add" exact component={AddPostPage} />
            </Switch>
        </Router>
    )
}

export default AppRouter