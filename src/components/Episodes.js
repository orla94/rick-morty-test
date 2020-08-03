import React from 'react';

const Episodes = (props) => {
  const {name, episode, url, air_date, id} = props.result;

   return(
     <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4">
      <div className="card">
       <div className="card-body">
         <a href={`detail-character/${id}`}><h5 className="card-title font-weight-bold">{name}</h5></a>
         Episodio:
         <h6 className="font-weight-bold">{episode}</h6>
         Fecha:
         <h6 className="font-weight-bold">{air_date}</h6>
       </div>
      </div>
     </div>
   )
}

export default Episodes;
