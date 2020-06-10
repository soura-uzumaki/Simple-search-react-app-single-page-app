 import React, {Component} from 'react';
 import Cardlist from '../components/CardList';	//  '../' means just outside this file's parent folder
 // import {robots} from '../robots';			//  whereas './' means same parent folder as this file's
 import Search from '../components/Search';
 import Scroll from '../components/Scroll';

 class App extends Component{

 	constructor(){
 		super()
 		this.state={
 			robots: [],
 			// robots:robots,
 			searchField: ''
 		}
 	}	

 	componentDidMount(){

 		fetch('https://jsonplaceholder.typicode.com/users')

 			.then(response=>response.json())

 			.then(users=>{this.setState({robots:users})});
 	
 	}


 	onSearchChange=(event)=>{
 		// console.log(event.target.value);
 		this.setState({ searchField: event.target.value})
 		
 	}

 		render(){
 			
 			const {robots, searchField }=this.state;

 			const filterRobo=robots.filter(robot=>{
 			return robot.name.toLowerCase().includes(searchField.toLowerCase()); 			
 			})

 			if (!robots.length)
 			{
 				return <h1 style ={{color: '#a1a1a1'}}>Please wait while we load...</h1>
 			}
 			
 			else    { 
 				return (
		 			<div className='tc'>
		 				<h1 style ={{color: '#a1a1a1', 
		 				fontFamily: 'Roboto',
		 				letterSpacing:'5px'}}>
		 					ROBOTS
		 				</h1>
		 				<Search searchChange={this.onSearchChange}/>
		 				<Scroll>
		 					<Cardlist robots={filterRobo}/>
		 				</Scroll>
		 			</div>
						);
 				    } 	
 				}
 }

 export default App;