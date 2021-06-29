import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import PopArt from './pages/PopArtSection';
import UrbanArt from './pages/UrbanArtSection';
import Visits from './components/Visits';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/pop-art" component={PopArt}/>
                <Route exact path="/urban-art" component={UrbanArt}/>
            </Switch>
            <Visits/>
        </BrowserRouter>
    )
}

export default Routes;