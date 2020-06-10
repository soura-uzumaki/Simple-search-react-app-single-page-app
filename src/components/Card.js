import React from 'react';
// import robots from './robots';

const Card=({id,name})=>
{
	
	return (
			<div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
				<img alt='robo-friend' src={`https://robohash.org/${id}?50x50`} />
				<div>	
					<h2>{id}</h2>
					<p style ={{fontWeight: 'bold', letterSpacing:'1px'}}>{name}</p>
				</div>
			</div>
			);
};

export default Card;


