import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {GridList} from 'material-ui/GridList';
import { FlatButton } from 'material-ui';
import {Link} from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class Detalle extends React.Component{

    constructor(){
        super();
        this.state = {
            peli: {}
        }
    }


    componentWillMount(){

        let updateState = (data) => {
            this.setState({
                peli: data
            })
            console.log("Actualizado papud",this.state.items);
        }

        fetch('https://api.themoviedb.org/3/movie/'+ this.props.match.params.id +'?api_key=b5b664b4028c36029bbeaf55cc2b6fb9&language=es')
            .then(function (response) {
                return response.json();
            }).then(function (data) {
                updateState(data)
            })

    }
	render(){
		return(
			<div>
            <GridList cellHeight={180} cols={3} style={styles.gridList}>
                <Card>
                    <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                    />
                    <CardMedia
                    overlay={<CardTitle title={this.state.peli.title} subtitle={this.state.peli.original_title} />}>
                    <img src={"https://image.tmdb.org/t/p/w500/" + this.state.peli.poster_path} alt="" />
                    </CardMedia>
                    <CardTitle title="Card title" subtitle="Card subtitle" />
                    <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                    <FlatButton label="Action1" />
                    <FlatButton label="Action2" />
                    </CardActions>
                </Card>
                <div>Detalle de la peli {this.state.peli.title} con el id -- {this.props.match.params.id}</div>
                <FlatButton label="Home" containerElement={<Link to="/"></Link>} />
            </GridList>
            </div>
			);
	}
}

export default Detalle;