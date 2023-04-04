import React from 'react';
import Card from './Card';

const CardList = ({housings}) => {
  const cardArray = housings.map((user,i) =>{
    return <Card 
    key = {i} 
    id = {housings[i].id} 
    name={housings[i].name} 
    phone={housings[i].Phone} 
    email={housings[i].email} 
    image={housings[i].src}/>
  })
  return (
    <>
    {cardArray}
    </>
  );
}

export default CardList;