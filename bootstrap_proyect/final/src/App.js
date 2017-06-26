import React, { Component } from 'react';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {Row, Col } from 'reactstrap';
import Footer from './components/Footer/Footer';
import Routes from './routes';
import firebase from 'firebase';
import {Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user: null,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
 
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({user});
    });
  }


  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout(){

    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderloginButton(){
    if(this.state.user){
      return(        
        <div>
        <Row>
          <Col>
          <img className="foto" src={this.state.user.photoURL} alt={this.state.user.displayName}/>
          </Col>
          <Col>
          <p className="name">{this.state.user.displayName}</p>
          </Col>
          <Col>
          <Link to={"/"}><button className="log" onClick={this.handleLogout}>Salir</button></Link>
          </Col>
          <Col>
          <Link to={"/publicar/"}><button className="log">Publicar</button></Link>
          </Col>
          <Col>
          <Link to={"/"}><button className="log">Home</button></Link>
          </Col>
        </Row>
        </div>
        );
    } else {
      return(<button className="log" onClick={this.handleAuth}>Login con google</button>); 
    }
  }

  render() {
    return (

      <div className="App">
      <div>
        <Navbar color="faded" light toggleable className="bg-faded">
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand className="log">ChangeBook</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              {this.renderloginButton()}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Routes/>
      <Footer/>      
      </div>
    );
  }
}

export default App;
