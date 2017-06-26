import React,{Component} from 'react';
import './lista.css';

class Lista extends React.Component{

	constructor() {
		super();
		this.state = {
			name: "Serch"
		}
	}
	render(){
		return(
			<div className="bg">
				<h1>hello world</h1>
				<h2>hello {this.state.name}</h2>
			</div>
			);
	}
}

export default Lista