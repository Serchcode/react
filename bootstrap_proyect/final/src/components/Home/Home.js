import React from 'react';
import { Jumbotron, } from 'reactstrap';
import {Container,Row, Col } from 'reactstrap';
import { Card, CardTitle, CardText } from 'reactstrap';
import FaGoogle from 'react-icons/lib/fa/google';
import FaBook from 'react-icons/lib/fa/book';
import FaExchange from 'react-icons/lib/fa/exchange';
import './Home.css';
import images_uno from "../../assets/images/ch1.png"



class Home extends React.Component{
	render(){
		return(
			<div>
      			<Jumbotron>
       		  <h1  className="titulo">ChangeBook</h1>
        		<p className="texto">ChangeBook es una plataforma para el intercambio de libros de cualquier tipo, llena el formulario publica e intercambia!</p>
        		<hr className="my-2" />
        		
      			</Jumbotron>
            <Container>
            <Row>
            <Col>
            <Card block outline color="primary">
              <center>
              <FaGoogle className="icono"/>
              </center>
              <CardTitle>Inicia Sesion con Google</CardTitle>
              <CardText>Solo incia sesion y da permisos para poder hacer login con tu cuenta de Google.</CardText>
              <button className="cbtn">Iniciar Sesion</button>
            </Card>
            </Col>
            <Col>
            <Card block outline color="primary">
              <center>
              <FaBook className="icono"/>
              </center>
              <CardTitle>Publica tu libro</CardTitle>
              <br/>
              <CardText>Solo pon una pequeña descripcion de tu libro y una foto de el mismo.</CardText>
            </Card>
            </Col>
            <Col>
            <Card block outline color="primary">
              <center>
              <FaExchange className="icono"/>
              </center>
              <CardTitle>Intercambia</CardTitle>
              <CardText>Algun usuario te contactara para intercambiar tu libro o llegar a algun trato de prestamo.</CardText>
            </Card>
            </Col>
            </Row>
            </Container>
            <div className="second">
            <img src={images_uno} alt="libros"/>
            </div>
    		</div>
			)
	};
};

export default Home;