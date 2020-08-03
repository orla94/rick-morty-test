import React, { Component } from 'react';
import { useParams } from "react-router-dom";

class DetailCharacter extends Component {
    constructor(props){
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
      }
    }

    componentDidMount(){
      let id = this.props.match.params.id;
      const apiEpisode = `https://rickandmortyapi.com/api/episode/${id}`;
      fetch(apiEpisode)
        .then(response => response.json())
        .then(result => {
            this.setState({
              isLoaded: true,
              item: result,
            })
        });
    }

    render() {
      return (
         <div className="text-center mb-5">
            <h1 className="text-center mt-2 mb-2">- {this.state.item.name} -</h1>
            <p className="h5"><strong>Episodio: </strong> {this.state.item.episode}</p>
            <p className="h5"><strong>Fecha: </strong> {this.state.item.air_date}</p>
         </div>
      );
    }
}

export default DetailCharacter;
