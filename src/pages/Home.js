import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
          isLoaded: false,
          itemsEpisode: [],
          itemsCharacter: [],
          page: 2,
          pageC: 30
        };
    }

  componentDidMount() {
    const apiEpisode = `https://rickandmortyapi.com/api/episode/?page=${this.state.page}`;

    fetch(apiEpisode)
      .then(response => response.json())
      .then(result => this.setState({isLoaded: true, itemsEpisode: result.results}));

      const apiCharacter = `https://rickandmortyapi.com/api/character/?page=${this.state.pageC}`;

      fetch(apiCharacter)
        .then(response => response.json())
        .then(result => this.setState({isLoaded: true, itemsCharacter: result.results}));
  }

  render() {
    let recentEpisode = this.state.itemsEpisode.slice(this.state.itemsEpisode.length-3)
    let recentCharacter = this.state.itemsCharacter.slice(this.state.itemsCharacter.length-3)

    return(
      <div className="row">
         <h1 className="text-center col-12 mb-5 mt-5">- PERSONAJES RECIENTES -</h1>

         {recentCharacter.map(result => (
           <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={result.id}>
            <div className="card">
            <img className="card-img-top" src={result.image} alt={result.name}/>
             <div className="card-body">
               <a href={`detail-character/${result.id}`}><h5 className="card-title font-weight-bold">{result.name} - {result.status}</h5></a>
               Especie:
               <h6 className="font-weight-bold">{result.species}</h6>
               Origen:
               <h6 className="font-weight-bold">{result.origin.name}</h6>
               Ubicación:
               <h6 className="font-weight-bold">{result.location.name}</h6>
             </div>
            </div>
           </div>
         ))}

         <h1 className="text-center col-12 mb-5 mt-5">- EPISODIOS RECIENTES -</h1>

         {recentEpisode.map(result => (
           <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={result.id}>
            <div className="card">
             <div className="card-body">
               <a href={`detail-episode/${result.id}`}><h5 className="card-title font-weight-bold">{result.name}</h5></a>
               Episodio:
               <h6 className="font-weight-bold">{result.episode}</h6>
               Fecha:
               <h6 className="font-weight-bold">{result.air_date}</h6>
             </div>
            </div>
           </div>
         ))}
      </div>
    );
  }
}

export default Home;
