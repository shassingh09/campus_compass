import React from 'react';

const Card = ({name, phone, email, image}) => {
  return (
    <div className='maxw tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='Property' src={image}/>
      <div>
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
