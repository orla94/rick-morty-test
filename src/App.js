import React, { Component } from 'react';
import Search from './components/Search';
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import AllEpisodes from './pages/AllEpisodes';
import AllCharacters from './pages/AllCharacters';
import DetailCharacter from './pages/DetailCharacter';
import DetailEpisode from './pages/DetailEpisode';
import Error from './pages/Error';
import ResultSearch from './pages/ResultSearch'

class App extends Component{

  render() {
    return (
      <div className="container-fluid">
          <BrowserRouter>
          <div className="jumbotron">
            <Search/>
          </div>
            <div><Navigation /></div>
            <div>
                <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/episode" component={AllEpisodes}/>
                 <Route exact path="/character" component={AllCharacters}/>
                 <Route exact path="/detail-character/:id" component={DetailCharacter}/>
                 <Route exact path="/detail-episode/:id" component={DetailEpisode}/>
                 <Route exact path="/result" component={ResultSearch}/>
                 <Route component={Error}/>
               </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
