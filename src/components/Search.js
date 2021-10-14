import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search() {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [details, setDetails] = useState([]);

  const getAirports = async () => {
    await axios.get('./assets/data/initialDetails.json').then((res) => {
      setDetails(res.data.data)
    })
  }

  //useEffect(() => {
  //  console.log(getAirports())
  //}, [])

  const filteredairports = details.filter(
    airport => {
      return (
        airport
        .shortcode
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        airport
        .city
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        airport
        .state
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
      );
    }
  );

  const handleChange = e => {
    getAirports()
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  		<Scroll>
	  			<SearchList filteredairports={filteredairports} />
	  		</Scroll>
	  	);
	  }
  }

  return (
    <section className="garamond">
			<div className="navy georgia ma0 grow">
				<h2 className="f2">Find Airport</h2>
			</div>
			<div className="pa2">
				<input 
					className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
					type = "search" 
					placeholder = "Search Airports" 
					onChange = {handleChange}
				/>
			</div>
			{searchList()}
		</section>
  );
}

export default Search;