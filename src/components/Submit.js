import React, { Component } from 'react';

class Submit extends Component {
  render() {
    return(
      <div className="form-group col-md-2">
        <input type="submit" className="btn btn-lg btn-danger btn-block"
               value="Buscar" />
      </div>
    );
  }
}

export default Submit;
