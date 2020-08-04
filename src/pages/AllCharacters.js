import React, { Component } from 'react';
import Pagination from './../components/Pagination';

class AllCharacters extends Component {
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
    const apiCharacter = `https://rickandmortyapi.com/api/character/?page=${this.state.page}`;

    fetch(apiCharacter)
      .then(response => response.json())
      .then(result => this.setState({isLoaded: true, items: result.results}));
  }

  render() {
    return(
      <div className="row">
         <h1 className="text-center col-12 mb-5 mt-5">PERSONAJES</h1>

         {this.state.items.map(result => (
           <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4" key={result.id}>
            <div className="card">
            <img className="card-img-top" src={result.image} alt={result.name}/>
             <div className="card-body">
               <a href={`detail-episode/${result.id}`} className="nav-item nav-link"><h5 className="card-title font-weight-bold">{result.name} - {result.status}</h5></a>
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

export default AllCharacters;
