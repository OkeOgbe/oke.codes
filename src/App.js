import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="App">
              <Switch>
                <Route exact path='/' component={Home}/>
              </Switch>
            </div>
        </Router>
    );
}

export default App;
