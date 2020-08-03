import React from 'react';

const CardCharacter = (props) => {
  const {name, image, url, species, location, origin, status, id} = props.result;

   return(
     <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
      <div className="card">
      <img className="card-img-top" src={image} alt={name}/>
       <div className="card-body">
         <a href={`detail-episode/${id}`} className="nav-item nav-link"><h5 className="card-title font-weight-bold">{name} - {status}</h5></a>
         Especie:
         <h6 className="font-weight-bold">{species}</h6>
         Origen:
         <h6 className="font-weight-bold">{origin.name}</h6>
         Ubicación:
         <h6 className="font-weight-bold">{location.name}</h6>
       </div>
      </div>
     </div>
   )
}

export default CardCharacter;
