import React from 'react'
import { Card, Icon, Container, Button} from 'semantic-ui-react';
import './Card.css';
import {Link} from 'react-router-dom';


const Carta = (props) => (
<Container>
  <Card
    image= {"https://image.tmdb.org/t/p/w500/" + props.peli.poster_path}
    header={props.peli.title}
    meta={props.peli.original_title}/>
    <Link to={"/movie/"+props.peli.id}>ver</Link>
</Container>
)

export default Carta