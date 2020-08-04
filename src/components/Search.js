import React, { Component } from 'react';
import Submit from './Submit';
import { Redirect } from "react-router-dom";

class Search extends Component {
  searchRef = React.createRef();
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
    });
  }

  prevPage = () => {
    let page = this.state.page;
    if(page === 1) return null;
    page --;

    this.setState({
      page
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

  getData = (e) => {
    e.preventDefault();
    //get the value of the input and sending it to the main component
    this.dataSearch(this.searchRef.current.value, this.typeSearch.value);
    this.searchRef.current.value = '';
  }

  render() {
    return(
      <div>
        <form onSubmit={this.getData}>
          <div className="input-group">
            <div className="form-group col-md-2" >
              <select className="form-control form-control-lg" ref={(input) => this.typeSearch = input} onChange={(input) => this.typeSearch = input}>
                <option value="character">Personajes</option>
                <option value="episode">Episodios</option>
              </select>
            </div>
            <div className="form-group col-md-8">
              <input ref={this.searchRef} type="text" className="form-control form-control-lg"
                     placeholder="Buscar..." />
            </div>
            <Submit />
          </div>
        </form>

        { (this.state.searchArray === undefined || this.state.searchArray.length === 0) &&
          <Redirect to={{
            pathname: '/',
          }} />
        }

        {this.state.searchArray !== undefined && this.state.searchArray.length > 0 &&
          <Redirect to={{
            pathname: '/result',
            state: {
                    resultSearch: this.state.searchArray,
                    type: this.state.type,
                  }
          }} />
        }

      </div>
    );
  }
}

export default Search;
