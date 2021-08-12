import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import PopArt from './pages/PopArtSection';
import UrbanArt from './pages/UrbanArtSection';
import Galery from './pages/Galery';
import Images from './pages/Images';
import Visits from './components/Visits';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/pop-art" component={PopArt}/>
                <Route exact path="/urban-art" component={UrbanArt}/>
                <Route exact path="/galery" component={Images}/>
                <Route exact path="/images" component={Galery}/>
            </Switch>
            <Visits/>
        </BrowserRouter>
    )
}

export default Routes;