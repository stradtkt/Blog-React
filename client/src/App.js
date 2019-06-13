import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import NavAppBar from './components/layout/NavAppBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Landing from './components/layout/Landing';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import Alert from './components/layout/Alert';

const App = () => {
  return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Container maxWidth="lg">
                        <NavAppBar/>
                        <Alert/>
                        <Switch>
                            <Route exact={true} path='/' component={Landing}/>
                            <Route exact={true} path='/login' component={Login}/>
                            <Route exact={true} path='/register' component={Register}/>
                        </Switch>
                    </Container>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
