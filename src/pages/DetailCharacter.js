import React, { Component } from 'react';

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
      const apiCharacter = `https://rickandmortyapi.com/api/character/${id}`;
      fetch(apiCharacter)
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
            <p className="h5"><strong>Estado: </strong> {this.state.item.status}</p>
            <img className="card-img-top w-25 img-thumbnail mb-2" src={this.state.item.image} alt={this.state.item.name}/>
            <p className="h5"><strong>Género: </strong> {this.state.item.gender}</p>
            <p className="h5"><strong>Tipo: </strong> {this.state.item.type}</p>
            <p className="h5"><strong>Especie: </strong> {this.state.item.species}</p>
         </div>
      );
    }
}

export default DetailCharacter;
