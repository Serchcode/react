import React from 'react';
import ListItem from './Listitem';
import ListForm from './ListForm';
import firebase from '../../FireBase/firebase'

class Lista extends React.Component{
	constructor() {
		super();
		this.state = {
			items: [
			{
				name:'Serch',
				edad:'22',
				id: 1
			},
			{
				name:'Luisa',
				edad:'24',
				id: 2
			},
			{
				name:'Chelis',
				edad:'30',
				id: 3
			}
			]
		}
		
	}

	/*ciclos de vidad
	component willmount antes de que se cargue el elemnto
	component didmount despues de que se cargue el documento
	*/
	componentWillMount() {
		firebase.database().ref('fixtercamp').on('value',(val)=>{
			let items = [];
			val.forEach(item=>{
				items.push(item.val());
			})
			this.setState({
				items: items
			})
		})
	}

	addItem = (item) =>{
		let newPostKey = firebase.database().ref('fixtercamp').push().key;
		item.fire_key = newPostKey
		let updates = {};
		updates['/fixtercamp/'+newPostKey]=item;
		firebase.database().ref().update(updates);
		console.log()
		//this.setState({items:new_list})


	}

	remove = (item) => {
		/*const new_list = this.state.items.filter(i => i !== item);
		console.log(new_list);
		this.setState({items:new_list});*/
		let updates = {};
		updates['/fixtercamp/'+item.fire_key] = null;
		console.log(updates);
		firebase.database().ref().update(updates);
	}

	render(){
		return(
			<div>
				<h1>hello girls</h1>
				<p>Lista de compras para la peda</p>
				{this.state.items.map(item =>
				 <ListItem item={item} 
				 key={item.id}
				 remove={this.remove}
				 />)}
				<ListForm count={this.state.items.length}
				addItem={this.addItem}/>
			</div>
			);
	}
}

export default Lista;