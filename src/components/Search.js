import React, { Component } from 'react';
import Submit from './Submit';

class Search extends Component {
  searchRef = React.createRef();
  getData = (e) => {
    e.preventDefault();
    //get the value of the input and sending it to the main component
    this.props.dataSearch(this.searchRef.current.value, this.typeSearch.value);
  }

  render() {
    return(
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
    );
  }
}

export default Search;
