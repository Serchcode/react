import React from 'react';
import {GridList} from 'material-ui/GridList';
import CardHome from '../Card/Card'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  }
};

class Home extends React.Component {
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
	render() {
		return(
			<div>
				Pelis list
				<div style={styles.root}>
					<GridList cols={1}
					cellHeight={400}
					style={styles.gridList}>
					{this.state.items.map((peli)=> <CardHome peli={peli} key={peli.id}/>)}
					</GridList>
				</div>
			</div>


			);
	}
}

export default Home;
