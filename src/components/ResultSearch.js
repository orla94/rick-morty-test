import React, { Component } from 'react';
import Character from './Character';
import Episodes from './Episodes';
import Pagination from './Pagination';

class ResultSearch extends Component {
  viewResultSearch = () => {
    const results = this.props.resultSearch;
    if (results === undefined || results.length === 0) return null;

    return (
      <React.Fragment>
        <div className="col-12 p-5 row" >
          {this.typeSearch(results)}
        </div>

        <div className="row justify-content-center">
          <Pagination
            nextPage = {this.props.nextPage}
            prevPage = {this.props.prevPage}
          />
        </div>
      </React.Fragment>
    )
  }

  typeSearch = (results) => {

    if (this.props.type === 'character') {
      return results.map(result => (
        <Character
          key = {result.id}
          result = {result}
        />
      ));
    }else {
      return results.map(result => (
        <Episodes
          key = {result.id}
          result = {result}
        />
      ));
    }
  }

  render() {
    return(
      <React.Fragment>
      { this.viewResultSearch() }
      </React.Fragment>
    );
  }
}

export default ResultSearch;
