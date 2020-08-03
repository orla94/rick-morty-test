import React, { Component } from 'react';
import Search from './components/Search';
import ResultSearch from './components/ResultSearch'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import AllEpisodes from './pages/AllEpisodes';
import DetailCharacter from './pages/DetailCharacter';
import DetailEpisode from './pages/DetailEpisode';
import Error from './pages/Error';

class App extends Component{
  state ={
    text: '',
    type: '',
    searchArray : [],
    page: ''
  }

  nextPage = () => {
    let page = this.state.page;
    page ++;
    this.setState({
      page
    }, () => {
      this.consultApi();
    });
  }

  prevPage = () => {
    let page = this.state.page;
    if(page === 1) return null;
    page --;
    this.setState({
      page
    }, () => {
      this.consultApi();
    });
  }

  consultApi = () => {
    let apiCharacter = `https://rickandmortyapi.com/api/character/?page=${this.state.page}&name=${this.state.text}`;
    let apiEpisodie = `https://rickandmortyapi.com/api/episode/?page=${this.state.page}&name=${this.state.text}`;

    const urlApi = (this.state.type === 'character') ? apiCharacter : apiEpisodie;

    fetch(urlApi)
      .then(response => response.json())
      .then(result => this.setState({searchArray: result.results}));
  }

  dataSearch = (text, type) => {
    this.setState({
      text : text,
      type : type,
      page: 1
    }, () =>{
      this.consultApi();
    })
  };

  render() {
    return (
      <div className="container-fluid">
          <div className="jumbotron">
            <Search
              dataSearch = {this.dataSearch}
            />
          </div>
          <BrowserRouter>
            <div><Navigation /></div>
            <div className={ (this.state.searchArray.length === 0) ? 'd-block' : 'd-none'}>
                <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route exact path="/episode" component={AllEpisodes}/>
                 <Route exact path="/detail-character/:id" component={DetailCharacter}/>
                 <Route exact path="/detail-episode/:id" component={DetailEpisode}/>
                 <Route component={Error}/>
               </Switch>
            </div>
          </BrowserRouter>

          <div className={ (this.state.searchArray.length > 0) ? 'd-block' : 'd-none'}>
            <ResultSearch
              resultSearch = {this.state.searchArray}
              type = {this.state.type}
              nextPage = {this.nextPage}
              prevPage = {this.prevPage}
            />
          </div>
      </div>
    );
  }
}

export default App;
