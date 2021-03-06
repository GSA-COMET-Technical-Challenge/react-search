import React from 'react';
import Card from './Card';

function SearchList({ filteredairports }) {
  const filtered = filteredairports.map( airport =>  <Card key={airport.id} airport={airport}/>); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;