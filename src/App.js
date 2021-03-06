import React from 'react';
import {AnimatePresence} from 'framer-motion';
import {Switch, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './pages/Portfolio';

function App() {

    const location = useLocation();

    return (
            <div className="App">
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/portfolio' component={Portfolio}/>
                    </Switch>
                </AnimatePresence>
            </div>
    );
}

export default App;
