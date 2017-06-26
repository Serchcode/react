import React from 'react';


class ListForm extends React.Component{
	constructor() {
		super();
		this.state = {
			input:"",
			edad:0,
		}
	}

	changeNameHandler = (e) => {
		console.log(e.target.value);
		this.setState({
			input: e.target.value
		})
	}

	changeAgeHandler = (e) => {
		console.log(e.target.value);
		this.setState({
			edad: e.target.value
		})
	}

	addItem = (e) => {
		e.preventDefault();
		let item = {
			name: this.state.input,
			edad: this.state.edad,
			id: this.props.count + 1
		}
		this.props.addItem(item);
		this.setState({
			input:"",
			edad: 0,
		})
	}

	render(){
		return(
			<div>
				<p>Formulario</p>
				<form onSubmit={this.addItem}>
					<label htmlFor="">Nombre:</label>
					<input type="text" value={this.state.input}
					onChange={this.changeNameHandler}
					/>
					<label htmlFor="">edad</label>
					<input type="number" value={this.state.edad}
					onChange={this.changeAgeHandler}
					/>
					<button>Agrega item</button>
				</form>
			</div>
			);
	}
}

export default ListForm;	