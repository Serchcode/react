import React from 'react';
import firebase from 'firebase';
import { Container, Progress, Row, Col } from 'reactstrap'; 
import FaBook from 'react-icons/lib/fa/book';
import LibrosList from './Libroslist'
import './Libros.css';

class Libros extends React.Component{
	constructor() {
		super();
		this.state = {
			uploadValue: 0,
			items:[],
			picture: null
		};
		this.handleUpload = this.handleUpload.bind(this);
	}

	handleUpload (event){
		const file = event.target.files[0];
		const storageRef = firebase.storage().ref(`/libros/${file.name}`);
		const task = storageRef.put(file); 

		task.on('state_changed',snapshot =>{
			let percentaje = (snapshot.bytesTransferred/ snapshot.totalBytes)*100;
			this.setState({
				uploadValue: percentaje
			})
		},error => {
			console.log(error.message)
		}, () => {
			const record = {
				img: task.snapshot.downloadURL
			};
			const dbref = firebase.database().ref('imagenes');
			const newpicture = dbref.push();
			newpicture.set(record);
		});
	}

	componentWillMount() {
		firebase.database().ref('libros').on('value',(val)=>{
			let items = [];
			val.forEach(item=>{
				items.push(item.val());
			})
			this.setState({
				items: items
			})
		});
		firebase.database().ref('libros/imagenes').on('child_added',snapshot =>{
			this.setState({
				picture: this.state.pictures.concat(snapshot.val())
			});
		});
	}

	addItem = (item) =>{
		let newPostKey = firebase.database().ref('libros').push().key;
		item.fire_key = newPostKey
		let updates = {};
		updates['/libros/'+newPostKey]=item;
		firebase.database().ref().update(updates);
		console.log()
		//this.setState({items:new_list})


	}

	render(){
		return(
			<center>
			<div>
			<Container>
			<Row>
			<Col xs="12" sm="12" md="6" lg="6">
			<br />
			<span className="sp">Sube la foto de tu libro</span>
			<br />
			<center>
              <FaBook className="icono"/>
            </center>
			<br />
			<br />
			<Progress striped color="info" value={this.state.uploadValue} max="100" />
			<br/>
			<input className="btninput" type="file" onChange={this.handleUpload}/>
			<br/>
			<br/>
			</Col>
			<Col xs="12" sm="12" md="6" lg="6">
			<div className="formu">	
			<LibrosList addItem={this.addItem}/>
			</div>
			</Col>
			</Row>
			</Container>
			</div>
			</center>		
			);
	}
}
export default Libros;