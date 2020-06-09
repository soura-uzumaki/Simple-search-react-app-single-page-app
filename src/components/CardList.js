import React from 'react';
import Card from './Card';


const CardList=({robots})=>
{
	const cardArray=robots.map((robo,index)=>{
		return <Card key={index} id={robots[index].id} name={robots[index].name}/>
	})	
  return(
	<div>
		{cardArray}
	</div>
		);
}

export default CardList;