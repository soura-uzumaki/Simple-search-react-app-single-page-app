import React from 'react';

const Search=({searchField, searchChange})=>{
	return (

		<div className='pa1'>		
			<input className='pa3 ba b--red bg-lightest-blue'
			type='search' 
			placeholder='search robos...'
			onChange={searchChange}
			/>
		</div>


		);
}

export default Search;