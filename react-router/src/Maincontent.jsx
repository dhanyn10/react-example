import React from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Test from './pages/Test.jsx';

class Maincontent extends React.Component
{
    render()
    {
        return(
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/test">Test</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/test" component={Test}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Maincontent;