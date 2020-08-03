import React, { Component } from 'react';
import Pagination from './../components/Pagination';

class AllEpisodes extends Component {
    constructor() {
        super();
        this.state = {
          isLoaded: false,
          items: [],
          page: 1
        };
    }


  nextPage = () => {
    let page = this.state.page;
    page ++;
    this.setState({
      page
    }, () => {
      this.componentDidMount();
    });
  }

  prevPage = () => {
    let page = this.state.page;
    if(page === 1) return null;
    page --;
    this.setState({
      page
    }, () => {
      this.componentDidMount();
    });
  }

  componentDidMount() {
    const apiEpisode = `https://rickandmortyapi.com/api/episode/?page=${this.state.page}`;

    fetch(apiEpisode)
      .then(response => response.json())
      .then(result => this.setState({isLoaded: true, items: result.results}));
  }

  render() {
    console.log(this.state.items);
    let aNuevo = this.state.items.slice(this.state.items.length-5)
    return(
      <div className="row">
         <h1 className="text-center col-12 mb-5 mt-5">EPISODIOS</h1>

         {this.state.items.map(result => (
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

         <div className="container text-center">
           <Pagination
             nextPage = {this.nextPage}
             prevPage = {this.prevPage}
           />
         </div>


      </div>
    );
  }
}

export default AllEpisodes;
