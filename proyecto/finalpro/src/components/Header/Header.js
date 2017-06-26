import React, { Component } from 'react';
import { Menu,Segment,Grid } from 'semantic-ui-react';
import './Header.css';
import Carta from '../Card/Card';

class Header extends Component {
		constructor() {
		super();
		this.state = {
			items:[]
		}
	}

	componentWillMount() {
		let upadteState = (data) => {
			this.setState({
				items: data.results
			})
			console.log('Actualizado', this.state.items);
		}
		fetch('https://api.themoviedb.org/4/list/56?page=1&api_key=48d736e3df3466550abd0c9e8ad23d20&language=es')
		.then(function (response){
			return response.json();
			}).then(function (data){
				upadteState(data);
			})
	}
   state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  render() {
    return (
    <div>
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item name='Menu' onClick={this.toggleVisibility}/>
          <h1 color='blue'>
            Welcome to fisrt web with react
          </h1>
        </Menu>
      </Segment>
      <Grid container>
    	<Grid.Row> 
      {this.state.items.map((peli) =>
      	<Grid.Column computer={5} tablet={5} mobile={16}>
      	<Carta peli={peli} key={peli.id}/>
      	</Grid.Column>)}
      </Grid.Row>
  		</Grid>
    </div>
    );
  }
}
 export default Header;
