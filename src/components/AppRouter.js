import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import AddPostPage from './AddPostPage';
import NotFoundPage from './NotFoundPage';
import Home from './Home';
import createHistory from 'history/createBrowserHistory';
import EditPostPage from './EditPostPage';
import LoginPage from './LoginPage';
import Read from './Read';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <PublicRoute path="/" exact component={LoginPage} />
                <PrivateRoute path="/home" exact component={Home} />
                <PrivateRoute path="/read/:id" exact component={Read} />
                <PrivateRoute path="/edit/:id" component={EditPostPage} />
                <PrivateRoute path="/add" exact component={AddPostPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </Router>
    )
}

export default AppRouter