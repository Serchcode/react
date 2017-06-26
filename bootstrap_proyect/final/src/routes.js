import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Libros from './components/Libros/Libros';

const Routes = () => {
	return(
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/publicar/" component={Libros}/>
		</Switch>
		);
}

export default Routes;