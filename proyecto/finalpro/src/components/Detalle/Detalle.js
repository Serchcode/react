import React from 'react';
import { Card } from 'semantic-ui-react';

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
			 <Card
             image= {"https://image.tmdb.org/t/p/w500/" + this.state.peli.poster_path}
             header={this.state.peli.title}
             meta={this.state.peli.original_title}/>
			)
	}
}

export default Detalle