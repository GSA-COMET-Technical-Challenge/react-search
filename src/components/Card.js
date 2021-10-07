import React from 'react';

function Card({airport}) {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="br-100 h3 w3 dib" alt={airport.name} src={process.env.PUBLIC_URL + airport.imgPath} />
			<div>
				<h2>{airport.airport}</h2>
				<p>{airport.shortcode}</p>
				<p>{airport.city}</p>
				<p>{airport.state}</p>
			</div>
		</div>
	);
}

export default Card;