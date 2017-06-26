import React from 'react';
import { Input, Container } from 'reactstrap';


class Libroslist extends React.Component{
	constructor() {
		super();
		this.state = {
			titulo:"",
			descripcion:"",

		}
	}

	changeTitleHandler = (e) => {
		console.log(e.target.value);
		this.setState({
			titulo: e.target.value
		})
	}

	changeDescHandler = (e) => {
		console.log(e.target.value);
		this.setState({
			descripcion: e.target.value
		})
	}


	addItem = (e) => {
		e.preventDefault();
		let item = {
			titulo: this.state.titulo,
			descripcion: this.state.descripcion,
	
		}
		this.props.addItem(item);
		this.setState({
			titulo:"",
			descripcion:"",

		})
	}

	render(){
		return(
			<div>
			<Container>
			
				<p>LLena los datos de tu libro</p>
				<form onSubmit={this.addItem}>
					<label htmlFor="">Titulo:</label>
					<Input type="text" value={this.state.titulo}
					onChange={this.changeTitleHandler}
					/>
					<label htmlFor="">Descripcion</label>
					<Input type="text" value={this.state.descripcion}
					onChange={this.changeDescHandler}
					/>
					<br/>
					<button className="btnform">Agrega item</button>
				</form>
			</Container>	
			</div>
			);
	}
}

export default Libroslist;	