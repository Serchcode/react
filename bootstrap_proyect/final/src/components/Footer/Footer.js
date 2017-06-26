import React from 'react';
import './Footer.css';
import {Container,Row, Col } from 'reactstrap';
import FaBook from 'react-icons/lib/fa/book';

class Footer extends React.Component{
	render(){
		return(
			<div className="footer">
				<Container>
				<Row>
				<Col>
				<FaBook/>
				</Col>
				<Col>
				<p>ChangeBook.com 2017</p>
				<p>Sergio Pérez Bautista</p>
				</Col>
				<Col>
				<FaBook/>
				</Col>
				</Row>
				</Container>
			</div>
			)
	};
};

export default Footer;