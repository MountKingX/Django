import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import ToDoListPage from './todolist/ToDoListPage';

import './app.styles.scss';

function App() {
    return (
        <BrowserRouter>
            <div className={'app'}>
                <Switch>
                    <Route path='/' exact component={LandingPage}/>
                    <Route path='/todo' exact component={ToDoListPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
