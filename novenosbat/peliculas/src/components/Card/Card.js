import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';

const CardHome = (props) => {
	return(
	<Card>
    	<CardHeader
      	title="URL Avatar"
      	subtitle="Subtitle"
      	avatar="http://wceacses.org/img/profiles/common.png"
    	/>
    <CardMedia
      overlay={<CardTitle title={props.peli.title} subtitle={props.peli.original_title}/>}
    >
    <img src={"https://image.tmdb.org/t/p/w500/" + props.peli.poster_path} alt="" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      {props.peli.overview}
    </CardText>
    <CardActions>
      <FlatButton label="Ver detalle" containerElement={<Link to={"/movie/"+props.peli.id}></Link>} />
    </CardActions>
  </Card>	
  );
}

export default CardHome;
