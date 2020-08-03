import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <div className="navbar-nav">
                      <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                      <NavLink to="/episode" className="nav-item nav-link">Episodios</NavLink>
                  </div>
              </div>
          </nav>
       </div>
    );
}

export default Navigation;
