import React from 'react';

const SearchBox =({searchfield, searchChange}) => {
  return (
    <div className= 'pa2 '>
    <input
    className='pa3 ba br3 shadow-5 ' 
    type='search' 
    placeholder ='Search Properties...'
    onChange ={searchChange} 
    />
    </div>
  );

}

export default SearchBox;